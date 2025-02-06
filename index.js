let base_preguntas = [...base_preguntas_ev1]

const params = new URLSearchParams(window.location.search);
const nombresString = params.get("jugadores") ?? "Usted";
const theme = params.get("theme");

if (theme && theme != "all") {
  base_preguntas = base_preguntas.filter(e=>e.theme == theme);
}

const nombresArray = nombresString.split(",");

const participantes = nombresArray.map((e) => ({
  nombre: e,
  correctas: 0,
  realizadas: 0,
}));

let index = 0;
let wait = false;
let btn;

/* while (base_preguntas.length > 2) {
    base_preguntas.pop();
} */

function generarURLJugadores() {
  const jugadores = ["Carolina", "Patricia", "Andrés", "Sebastián"];
  const param = jugadores.join(",");
  const nuevaURL = `${window.location.origin}${window.location.pathname}?jugadores=${param}&theme=all`;
  return nuevaURL;
}

console.log(generarURLJugadores());

{
  const jugadores = document.querySelector(".jugadores");
  let str = "";
  for (let i = 0; i < Object.keys(participantes).length; i++) {
    str += `
            <div class="participante participante-${i}">
                <style class="var">
                    .participante-${i}{
                        --bg: transparent;
                    }
                </style>
                <b>${participantes[i].nombre}</b>
                <br/>
                <br/>
                <div class="progress-container">
                    <span>0/0</span>
                    <progress value="0" max="1"></progress>
                </div>
            </div>
        `;
  }
  jugadores.innerHTML = str;
}

{
  const opciones = document.querySelector(".opciones");
  let str = "";
  for (let i = 0; i < 5; i++) {
    str += `
            <div class="renglon-opn">
                <span class="index-opn">
                    ${i + 1}
                </span>
                <div class="opn-${i} btn" onclick="responder('.opn-${i}')">
                    ...
                </div>
            </div>
        `;
  }
  opciones.innerHTML = str;
}

function responder(btn_class) {
  if (wait || index >= base_preguntas.length) {
    return;
  }
  wait = true;
  document.querySelector(".msg").style.opacity = 1;
  btn = document.querySelector(btn_class);
  const { participanteDOM, p } = participanteDOMIndex();

  const respuesta = btn.innerHTML;
  const esCorrecta = respuesta == Respuesta_Correcta;
  participantes[p].correctas += esCorrecta ? 1 : 0;
  participantes[p].realizadas++;

  const { correctas, realizadas } = participantes[p];

  if (esCorrecta) {
    btn.style.background = "lightgreen";
  } else {
    btn.style.background = "lightpink";
    for (let i = 0; i < 5; i++) {
      const bo = document.querySelector(`.opn-${i}`);
      if (bo.innerHTML == Respuesta_Correcta) {
        bo.style.background = "Aquamarine";
        break;
      }
    }
  }

  participanteDOM.querySelector("span").innerHTML =
    correctas + "/" + realizadas;

  participanteDOM
    .querySelector("progress")
    .setAttribute("value", participantes[p].correctas);
  participanteDOM
    .querySelector("progress")
    .setAttribute("max", participantes[p].realizadas);

  index++;
}

document.addEventListener("keyup", function () {
  if (wait) {
    cargarPregunta();
    wait = false;
    btn.style.background = null;
  }
});

let Respuesta_Correcta;

function participanteDOMIndex() {
  const p = index % Object.keys(participantes).length;
  const participanteDOM = document.querySelector(`.participante-${p}`);
  return {
    participanteDOM,
    p,
  };
}

function cargarPregunta() {
  document.querySelector(".msg").style.opacity = 0;
  if (index >= base_preguntas.length) {
    document.querySelector(`.turno`).innerHTML = "";
    document.querySelector(`.test`).style.opacity = "0.1";
    document.querySelector(`.pregunta`).innerHTML = "FIN";
    for (let i = 0; i < 5; i++) {
      document.querySelector(`.opn-${i}`).innerHTML = "...";
    }
    for (let i = 0; i < Object.keys(participantes).length; i++) {
      const participanteDOM = document.querySelector(`.participante-${i}`);
      const t = participantes[i].correctas / participantes[i].realizadas;
      const MAL = [255, 50, 50];
      const BIEN = [140, 255, 140];
      const INTERP = [
        (BIEN[0] - MAL[0]) * t + MAL[0],
        (BIEN[1] - MAL[1]) * t + MAL[1],
        (BIEN[2] - MAL[2]) * t + MAL[2],
      ];
      participanteDOM.querySelector(".var").innerHTML = `
                .participante-${i}{
                    --bg: rgb(${INTERP.join(", ")})
                }
            `;
    }
    return;
  }
  let {
    Pregunta: Pregunta,
    "Respuesta Correcta": RespuestaCorrecta,
    "Incorrecta 1": Incorrecta1,
    "Incorrecta 2": Incorrecta2,
    "Incorrecta 3": Incorrecta3,
    "Incorrecta 4": Incorrecta4,
  } = base_preguntas[index];

  document.querySelector(`.pregunta`).innerHTML = Pregunta.replaceAll(
    "<",
    "&lt;"
  ).replaceAll(">", "&gt;");

  for (let i = 0; i < 5; i++) {
    const bo = document.querySelector(`.opn-${i}`);
    bo.style.background = null;
  }

  Respuesta_Correcta = RespuestaCorrecta;

  let opciones_txt = [
    RespuestaCorrecta,
    Incorrecta1,
    Incorrecta2,
    Incorrecta3,
    Incorrecta4,
  ]
    .map((e) => e.replaceAll("<", "&lt;").replaceAll(">", "&gt;"))
    .sort()
    .sort((a, b) => Math.random() - 0.5);

  opciones_txt.forEach((txt, i) => {
    document.querySelector(`.opn-${i}`).innerHTML = txt;
  });

  for (let i = 0; i < Object.keys(participantes).length; i++) {
    const participanteDOM = document.querySelector(`.participante-${i}`);
    participanteDOM.querySelector(".var").innerHTML = `
            .participante-${i}{
                --bg: var(--no-te-toca);
            }
        `;
  }
  const { p, participanteDOM } = participanteDOMIndex();
  participanteDOM.querySelector(".var").innerHTML = `
        .participante-${p}{
            --bg: var(--te-toca);
        }
    `;
  document.querySelector(`.turno`).innerHTML = participantes[p].nombre;
}

cargarPregunta();
