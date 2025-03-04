const click_para_continuar = (
  params.get("click-para-continuar") ?? "si"
).toLowerCase();
const barajar = (params.get("barajar") ?? "si").toLowerCase();
if (barajar === "si") {
  base_preguntas = base_preguntas.sort(() => Math.random() - 0.5); // Desordenar
}
const limitar_banco = parseInt(params.get("limitar-banco") ?? -1);

if (limitar_banco > 0) {
  base_preguntas = base_preguntas.slice(0, limitar_banco);
}

let participantes = (params.get("jugadores") ?? "Usted")
  .split(",")
  .map((e) => ({
    nombre: e,
    correctas: 0,
    realizadas: 0,
  }));

const barajar_jugadores = (
  params.get("barajar-jugadores") ?? "si"
).toLowerCase();
if (barajar_jugadores === "si") {
  participantes = participantes.sort(() => Math.random() - 0.5); // Desordenar
}

function configurar_URL(nuevos_parametros) {
  const parametros_configurados = {};
  for (const [key, value] of params.entries()) {
    parametros_configurados[key] = value;
  }
  Object.assign(parametros_configurados, nuevos_parametros);
  const nuevaURL =
    `${window.location.origin}${window.location.pathname}?` +
    Object.entries(parametros_configurados)
      .filter(([, v]) => Boolean(v))
      .map(([k, v]) => {
        return `${k}=${v}`;
      })
      .join("&");
  return nuevaURL;
}

function CustomUrlComponent() {
  const [jugadores, setJugadores] = React.useState([]);
  const [barajar_preguntas, setBarajarPreguntas] = React.useState("si");
  const [limitar_banco, setLimitarBanco] = React.useState(-1);
  const [click_para_continuar, setClickParaContinuar] = React.useState("si");
  const [barajar_jugadores, setBarajarJugadores] = React.useState("si");
  const [themeTrivia, setThemeTrivia] = React.useState(
    params.get("theme") ?? "00-css-basic"
  );

  const url = configurar_URL({
    theme: themeTrivia,
    "barajar-jugadores": barajar_jugadores == "si" ? "" : "no",
    barajar: barajar_preguntas == "si" ? "" : "no",
    "limitar-banco": limitar_banco > 0 ? limitar_banco : "",
    "click-para-continuar": click_para_continuar == "si" ? "" : "no",
    jugadores: jugadores.join(","),
  });

  return (
    <div style={{ scale: "0.85", margin: "-50px -30px 0 -30px" }}>
      <Typography variant="h4">Personalizar Juego</Typography>
      <br />
      <Paper className="paper" elevation={2}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">ID tema</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="theme"
            value={themeTrivia}
            label="id trivia"
            onChange={(event) => {
              setThemeTrivia(event.target.value);
            }}
          >
            {["00-css-basic", "01-css-position-display"].map((t) => (
              <MenuItem value={t}>{t}</MenuItem>
            ))}
          </Select>
          <FormHelperText>ID del banco de preguntas</FormHelperText>
        </FormControl>
      </Paper>
      <br />
      <Paper className="paper" elevation={2}>
        <div style={{ display: "flex", justifyContent: "start", gap: "10px" }}>
          <TextField
            style={{ width: "80%" }}
            id="nuevo-jugador"
            label="Jugador"
            variant="outlined"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                const boton_nuevo_jugador = document.getElementById(
                  "boton-nuevo-jugador"
                );
                boton_nuevo_jugador.click();
              }
            }}
          />
          <Button
            id="boton-nuevo-jugador"
            style={{ width: "20%" }}
            onClick={() => {
              const nuevo_jugador =
                document.getElementById("nuevo-jugador").value;
              if (nuevo_jugador.trim() !== "") {
                setJugadores([...jugadores, nuevo_jugador]);
                document.getElementById("nuevo-jugador").value = "";
              }
            }}
          >
            Agregar
          </Button>
        </div>
        <div style={{ width: "100%", marginTop: "10px" }}>
          {jugadores.map((jugador, index) => (
            <Chip
              key={index}
              label={jugador}
              onDelete={() => {
                const jugadores_actualizados = jugadores.filter(
                  (_, i) => i !== index
                );
                setJugadores(jugadores_actualizados);
              }}
            />
          ))}
        </div>
      </Paper>
      <br />
      <div className="contenedor-bools">
        <Paper className="paper" elevation={2}>
          <FormControl>
            <FormLabel>¿Barajar jugadores?</FormLabel>
            <RadioGroup
              row
              name="barajar-jugadores"
              value={barajar_jugadores}
              onChange={(event) => {
                setBarajarJugadores(event.target.value);
              }}
            >
              {["Si", "No"].map((o) => (
                <FormControlLabel
                  value={o.toLowerCase()}
                  control={<Radio />}
                  label={o}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
        <Paper className="paper" elevation={2}>
          <FormControl>
            <FormLabel>¿Barajar preguntas?</FormLabel>
            <RadioGroup
              row
              name="barajar"
              value={barajar_preguntas}
              onChange={(event) => setBarajarPreguntas(event.target.value)}
            >
              {["Si", "No"].map((o) => (
                <FormControlLabel
                  value={o.toLowerCase()}
                  control={<Radio />}
                  label={o}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
        <Paper className="paper" elevation={2}>
          <TextField
            id="limitar-banco"
            label="Limitar preguntas"
            type="number"
            value={limitar_banco}
            onChange={(e) => setLimitarBanco(e.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            inputProps={{ min: -1 }}
          />
          <Typography variant="caption" color="secondary">
            Limita la cantidad de preguntas en juego.
          </Typography>
        </Paper>
        <Paper className="paper" elevation={2}>
          <FormControl>
            <FormLabel>¿Continuar con click?</FormLabel>
            <RadioGroup
              row
              name="click-para-continuar"
              value={click_para_continuar}
              onChange={(e) => setClickParaContinuar(e.target.value)}
            >
              {["Si", "No"].map((o) => (
                <FormControlLabel
                  value={o.toLowerCase()}
                  control={<Radio />}
                  label={o}
                />
              ))}
            </RadioGroup>
            <Typography variant="caption" color="secondary">
              Necesario para pantallas tactiles
            </Typography>
          </FormControl>
        </Paper>
      </div>
      <Paper className="paper">
        <div
          style={{
            position: "relative",
            height: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "absolute",
              gap: "15px",
              left: "0",
              right: "0",
            }}
          >
            <Link
              className="url"
              href={url}
              style={{
                width: "90%",
              }}
            >
              <small>{url}</small>
            </Link>
            <Tooltip title="Copiar enlace">
              <IconButton
                className="boton-copiar"
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  console.log(url);
                }}
              >
                <i className="fa-solid fa-copy" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Paper>
    </div>
  );
}

function personalizar_url() {
  Swal.fire({
    html: `<div id="root-custom-url"></div>`,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    willOpen: () => {
      ReactDOM.render(
        <CustomUrlComponent />,
        document.getElementById("root-custom-url")
      );
    },
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
      ];
    },
  });
}

function App() {
  let [indice_pregunta_actual, modIndicePreguntaActual] = React.useState(-1);

  let Quizz = React.useRef(null);

  React.useLayoutEffect(() => {
    const iniciar_pregunta = () => {
      let q = Quizz.current;
      if (!q || q.pregunta_respondida) {
        modIndicePreguntaActual(indice_pregunta_actual++);
        Quizz.current = DriverQuizz();
        q = Quizz.current;
        q.cargarPregunta();
        const justificacion = document.querySelector(".justificacion");
        if (justificacion) {
          justificacion.style.display = "none";
        }
      }
    };
    document.addEventListener("keyup", iniciar_pregunta);
    if (click_para_continuar != "no") {
      document.addEventListener("mouseup", iniciar_pregunta);
    }
    iniciar_pregunta();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip title="Personalizar" placement="right">
          <IconButton id="personalizar" onClick={personalizar_url}>
            <i className="fa-solid fa-gear" />
          </IconButton>
        </Tooltip>
        <div
          style={{
            position: "fixed",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            background: "url(trivia/bg.svg)",
            backgroundSize: "cover",
            mixBlendMode: "soft-light",
          }}
          className="infinite-background-y"
        />
        <div
          style={{
            background: `radial-gradient(
            circle at center,
            mediumblue,
            midnightblue,
            black
          )`,
            position: "fixed",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            zIndex: -2,
          }}
        />
        <div
          style={{
            userSelect: "none",
            alignItems: "center",
            width: "90dvw",
            justifyContent: "space-between",
          }}
          className={fluidCSS()
            .ltX(1000, {
              flexDirection: ["column"],
              gap: "25px",
            })
            .end("app")}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "15px",
              padding: "10px",
            }}
            className="test"
          >
            <span className="msg" style={{ opacity: 0 }}>
              Presiona para continuar
            </span>
            <Typography
              variant="h4"
              component="span"
              className="turno-h1"
              style={{
                display: "inline-block",
                width: "100%",
                textAlign: "center",
              }}
            >
              <span className="turno"></span> responde.
            </Typography>
            <Paper className="pregunta">
              <Typography variant="h5">
                Cargando....
              </Typography>
            </Paper>
            <div className="opciones">
              {Array.from({ length: 5 }, (_, i) => (
                <div className="renglon-opn">
                  <Paper className="index-opn">
                    {["A", "B", "C", "D", "E"][i]}
                  </Paper>
                  <Paper
                    className={`opcion opn-${i} btn`}
                    onClick={() => {
                      Quizz.current.responder({ btn_class: `.opn-${i}` });
                    }}
                  >
                    ...
                  </Paper>
                </div>
              ))}
            </div>
          </div>
          <div className="jugadores">
            {participantes.map((p, i) => {
              return (
                <div className={`participante participante-${i}`}>
                  <style className="var">
                    {JS2CSS.parseCSS({
                      [`.participante-${i}`]: {
                        "--bg": "var(--en-espera-de-turno)",
                      },
                    })}
                  </style>
                  <b>{p.nombre}</b>
                  <br />
                  <br />
                  <div className="progress-container">
                    <span>0/0</span>
                    <progress value="0" max="1"></progress>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="https://t.me/manos_al_codigo"
            target="_blank"
            className={fluidCSS()
              .ltX(1000, {
                position: ["static", "fixed"],
              })
              .end("marca")}
          >
            Manos al código
            <img src="src/img/logo_128x128.png" />
          </a>
        </div>
      </div>
    </ThemeProvider>
  );

  function DriverQuizz() {
    return new (class _DriverQuizz {
      constructor() {
        this.indice_pregunta_actual = indice_pregunta_actual;
        this.bloquear_inicialmente_al_cargar = true;
        setTimeout(() => {
          this.bloquear_inicialmente_al_cargar = false;
        }, 500);
      }

      ocultar_mensaje_parpadeante() {
        document.querySelector(".msg").style.opacity = 0;
      }

      get participanteDOM() {
        return document.querySelector(
          `.participante-${this.indice_jugador_activo}`
        );
      }

      get participante_style() {
        return this.participanteDOM.querySelector("style.var");
      }

      borrar_opciones() {
        for (let i = 0; i < 5; i++) {
          ReactDOM.render("...", document.querySelector(`.opn-${i}`));
        }
      }

      el_juego_termino() {
        this.mostrar_msg_turno = "";
        document.querySelector(`.test`).style.opacity = "0.3";
        this.pregunta_mostrar = "FIN";
        for (let i = 0; i < Object.keys(participantes).length; i++) {
          const t = participantes[i].correctas / participantes[i].realizadas;
          const MAL = [255, 50, 50];
          const BIEN = [140, 255, 140];
          const INTERP = [
            (BIEN[0] - MAL[0]) * t + MAL[0],
            (BIEN[1] - MAL[1]) * t + MAL[1],
            (BIEN[2] - MAL[2]) * t + MAL[2],
          ];
          this.participante_style.innerHTML = `
              .participante-${i}{
                  --bg: rgb(${INTERP.join(", ")})
              }
          `;
        }
      }

      set pregunta_mostrar(Pregunta) {
        ReactDOM.render(
          <_>
            {Pregunta}
            <div className="justificacion" style={{ display: "none" }}>
              {this.justificacion}
            </div>
          </_>,
          this.DOM_pregunta
        );
      }

      mostrar_pregunta_actual() {
        this.pregunta_mostrar = this.Pregunta;
      }

      get DOM_pregunta() {
        return document.querySelector(`.pregunta`);
      }

      remover_color_fondo_botones() {
        for (let i = 0; i < 5; i++) {
          const boton = document.querySelector(`.opn-${i}`);
          boton.style.background = null;
        }
      }

      opciones_sin_conflicto_html(opciones) {
        return opciones.sort(() => Math.random() - 0.5);
      }

      quemar_opciones_elegir() {
        this.desordenar_opciones_responder().forEach((txt, i) => {
          ReactDOM.render(txt, document.querySelector(`.opn-${i}`));
        });
      }

      get pregunta_indice() {
        return base_preguntas[indice_pregunta_actual];
      }

      participante_indice() {
        return document.querySelector(
          `.participante-${this.indice_jugador_activo}`
        );
      }

      participante_indice_style() {
        return this.participante_indice().querySelector("style.var");
      }

      desactivar_participantes() {
        for (let i = 0; i < Object.keys(participantes).length; i++) {
          this.participante_indice_style().innerHTML = JS2CSS.parseCSS({
            [`.participante-${i}`]: {
              "--bg": "var(--en-espera-de-turno)",
            },
          });
        }
      }

      get indice_jugador_activo() {
        const indice = indice_pregunta_actual;
        const n_jugadores = Object.keys(participantes).length;
        return indice % n_jugadores;
      }

      get DOM_jugador_activo() {
        return document.querySelector(
          `.participante-${this.indice_jugador_activo}`
        );
      }

      activar_jugador() {
        this.DOM_jugador_activo.querySelector(".var").innerHTML =
          this.participante_indice_style().innerHTML = JS2CSS.parseCSS({
            [`.participante-${this.indice_jugador_activo}`]: {
              "--bg": "var(--en-turno)",
            },
          });
        this.mostrar_msg_turno_actual();
      }

      mostrar_msg_turno_actual() {
        this.mostrar_msg_turno = this.participante_en_juego.nombre;
      }

      set mostrar_msg_turno(nombre) {
        document.querySelector(`.turno`).innerHTML = nombre;
      }

      desordenar_opciones_responder() {
        this.opciones = this.opciones_sin_conflicto_html([
          this.RespuestaCorrecta,
          this.Incorrecta1,
          this.Incorrecta2,
          this.Incorrecta3,
          this.Incorrecta4,
        ]);
        return this.opciones;
      }

      actualizar_informacion_pregunta_actual() {
        let {
          Pregunta,
          justificacion,
          "Respuesta Correcta": RespuestaCorrecta,
          "Incorrecta 1": Incorrecta1,
          "Incorrecta 2": Incorrecta2,
          "Incorrecta 3": Incorrecta3,
          "Incorrecta 4": Incorrecta4,
        } = this.pregunta_indice;

        this.Pregunta = Pregunta;
        this.justificacion = justificacion;
        this.mostrar_pregunta_actual();

        this.RespuestaCorrecta = RespuestaCorrecta;
        this.Incorrecta1 = Incorrecta1;
        this.Incorrecta2 = Incorrecta2;
        this.Incorrecta3 = Incorrecta3;
        this.Incorrecta4 = Incorrecta4;
      }

      cargarPregunta() {
        this.ocultar_mensaje_parpadeante();
        this.borrar_opciones();
        console.log(this.pregunta_indice, indice_pregunta_actual);
        if (!this.pregunta_indice) {
          this.el_juego_termino();
          return;
        }

        this.actualizar_informacion_pregunta_actual();

        this.remover_color_fondo_botones();
        this.quemar_opciones_elegir();

        this.desactivar_participantes();

        this.activar_jugador();
      }

      get indice_correcto() {
        return this.opciones.indexOf(this.RespuestaCorrecta);
      }

      set msg_opacity(n) {
        document.querySelector(".msg").style.opacity = n;
      }

      set guardar_DOM_respuesta_usuario(query_) {
        this.DOM_usuario_respuesta = document.querySelector(query_);
      }

      get participante_en_juego() {
        return participantes[this.indice_jugador_activo];
      }

      set puntuacion_jugador(v) {
        return (this.participanteDOM.querySelector("span").innerHTML = v);
      }

      get participante_progreso_DOM() {
        return this.participanteDOM.querySelector("progress");
      }

      set valor_participante_progreso_DOM(v) {
        this.participante_progreso_DOM.setAttribute("value", v);
      }

      set max_valor_participante_progreso_DOM(v) {
        this.participante_progreso_DOM.setAttribute("max", v);
      }

      actualizar_progreso() {
        const { correctas, realizadas } = this.participante_en_juego;

        this.puntuacion_jugador = correctas + "/" + realizadas;

        this.valor_participante_progreso_DOM = correctas;
        this.max_valor_participante_progreso_DOM = realizadas;
      }

      set pintar_respuesta_usuario(color) {
        this.DOM_usuario_respuesta.style.background = color;
      }

      pintar_respuesta_correcta() {
        (
          [...document.querySelectorAll(`.opcion`)].find((bo) => {
            return bo.classList.contains(`opn-${this.indice_correcto}`);
          }) ?? { style: {} }
        ).style.background = "MediumSeaGreen";
      }

      get usuario_respondio_correctamente() {
        return this.DOM_usuario_respuesta.classList.contains(
          `opn-${this.indice_correcto}`
        );
      }

      calcular_puntaje() {
        const punto = this.usuario_respondio_correctamente ? 1 : 0;
        this.participante_en_juego.correctas += punto;
        this.participante_en_juego.realizadas++;
      }

      get usuario_puede_responder() {
        const paso_por_inicio = !this.bloquear_inicialmente_al_cargar;
        const en_rango_indices = indice_pregunta_actual < base_preguntas.length;
        const recien_respondio = !this.pregunta_respondida;

        const a = paso_por_inicio && recien_respondio && en_rango_indices;
        return a;
      }

      respuesta_fue_correcta() {
        this.pintar_respuesta_usuario = "ForestGreen";
      }

      respuesta_fue_incorrecta() {
        this.pintar_respuesta_usuario = "IndianRed";
        this.pintar_respuesta_correcta();
      }

      responder(props) {
        if (!this.usuario_puede_responder) {
          return;
        }
        this.pregunta_respondida = true;

        const { btn_class } = props;
        this.msg_opacity = 1;
        this.guardar_DOM_respuesta_usuario = btn_class;

        this.calcular_puntaje();
        if (this.usuario_respondio_correctamente) {
          this.respuesta_fue_correcta();
        } else {
          this.respuesta_fue_incorrecta();
        }

        document.querySelector(".justificacion").style.display = "";

        this.actualizar_progreso();
      }
    })();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
