var template_html = (() => {
  const s = loadStringsSync(
    asciiMap.CLI.myUI().playground_template.html_jsdelivr
  );
  if (s) {
    return s
      .replaceAll("iframe.css", asciiMap.CLI.myUI().playground_template.css)
      .replaceAll("iframe.js", asciiMap.CLI.myUI().playground_template.js);
  }
})();

let playground_id = (() => {
  const consulta = params.get("playground-id");
  if (consulta) {
    return consulta.split(",");
  }
})();

function filtrarEjercicioID(e) {
  return playground_id ? playground_id.includes(e.filename) : true;
}

function App() {
  let indice_codemirror_contador = 0;

  iniciarBGApp_1_radialGrads({ query: ".app-main" });

  const titulo = `Desafio${
    !playground_id || playground_id.lenght > 1 ? "s" : ""
  } de diseño CSS`;

  document.querySelector("title").innerHTML = titulo;

  return (
    <div className="app-main">
      <Header />
      <br />
      <div>
        <DivBody>
          <Typography variant="h2">
            <span>{titulo}</span>
          </Typography>
          <br />
          <hr />
        </DivBody>
        <Glosario />
        <br />
        <hr />
        <br />
        <VideosRelacionados />
        <br />
        <hr />
        <br />
        {(() => {
          const folder = carpeta_ejercicio("screen");

          return listarEjercicios(
            [
              {
                filename: "ejercicio-1",
                titulo: `Canales de Color a 45°`,
                descripcion: `
                  Un ejercicio que demuestra cómo la superposición de capas de color 
                  (rojo, verde y azul) puede generar efectos de mezcla llamativos en 
                  un fondo oscuro. El resultado es un cuadrado con un vibrante juego 
                  de luces y sombras.
                `,
              },
              {
                filename: "ejercicio-2",
                titulo: `Dispersión de Canales de Color`,
                descripcion: `
                  Este diseño presenta un cuadrado rodeado de un halo luminoso, 
                  creado al combinar los canales rojo, verde y azul. Permite 
                  apreciar cómo cada canal aporta una intensidad diferente, 
                  produciendo un efecto de luz envolvente.
                `,
              },
              {
                filename: "ejercicio-3",
                titulo: `Corazón en Colores Combinados`,
                descripcion: `
                  Un diseño que simula la fusión de colores primarios 
                  (rojo, verde y azul) dentro de una figura con forma de 
                  corazón. Ilustra la mezcla aditiva de luz y cómo se generan
                  nuevos tonos en la intersección de las capas de color.
                `,
              },
              {
                filename: "ejercicio-4",
                titulo: `Estrella Tartésica`,
                descripcion: `
                  Un diseño geométrico en el que la superposición de colores 
                  crea una estrella simétrica con bordes bien definidos. 
                  Representa la armonía entre las formas y el color, destacando 
                  los efectos de intersección entre las capas de luz.
                `,
              },
            ],
            folder
          );
        })()}
        {(() => {
          const folder = carpeta_ejercicio("simple");

          return listarEjercicios(
            [
              {
                filename: "ejercicio-5",
                titulo: `Logo Mastercard`,
                descripcion: `
                  Un diseño que reproduce el icónico logo de Mastercard, 
                  con dos círculos superpuestos en tonos naranja y rojo. 
                  Destaca la sencillez de formas y la elegante transición 
                  de color que simboliza la fusión de la marca.
                `,
              },
              {
                filename: "ejercicio-6",
                titulo: `Logo Domino’s Pizza`,
                descripcion: (
                  <div>
                    Una versión estilizada del famoso dominó en rojo y azul,
                    característico de la cadena de pizzerías. El diseño mantiene
                    la esencia de la marca al mostrar su distintivo esquema de
                    colores y forma.
                    <br />
                    <br />
                    <hr />
                    <br />
                    <Typography variant="h4">Glosario</Typography>
                    <br />
                    {hacer_glosario({
                      "#detalle-1, #detalle-2":
                        "sirven de apoyo para das la ubicación a los puntos del domino azul.",
                      ".bordear-capas-en-blanco":
                        "bordea las capas hijas con blanco.",
                      ".detalle-domino":
                        "establece las propiedades caracteristicas de los puntos del domino.",
                    })}
                    <br />
                  </div>
                ),
              },
              {
                filename: "ejercicio-7",
                titulo: `Logo London Underground`,
                descripcion: `
                  Una recreación del famoso logo del metro de Londres, 
                  compuesto por un círculo rojo y una barra azul en el centro con
                  texto en blanco. Su diseño icónico simboliza el transporte 
                  subterráneo de la ciudad y es reconocido a nivel mundial.
                `,
              },
              {
                filename: "ejercicio-8",
                titulo: `Logo de Instagram con Fondo Sólido`,
                descripcion: `
                  Representación minimalista del logo de Instagram, utilizando 
                  un fondo sólido para destacar la icónica forma de la cámara. 
                  Se enfoca en la simplicidad del diseño y la claridad del símbolo 
                  sin efectos de degradado.
                `,
              },
              {
                filename: "ejercicio-9",
                titulo: `Logo de Instagram con Degradado`,
                descripcion: `
                  Versión vibrante del logo de Instagram, empleando un degradado 
                  de colores cálidos que imita la identidad visual oficial de la 
                  marca. El efecto da una sensación de modernidad y dinamismo 
                  al diseño.
                `,
              },
              {
                filename: "ejercicio-10",
                titulo: `Símbolo de Yin Yang Simple`,
                descripcion: `
                  Un diseño limpio y esencial del símbolo del Yin Yang, que 
                  representa el equilibrio entre fuerzas opuestas. Se utilizan 
                  formas básicas y contrastes nítidos en blanco y negro para 
                  resaltar su significado filosófico.
                `,
              },
              {
                filename: "ejercicio-11",
                titulo: `Símbolo de Yin Yang Decorado`,
                descripcion: `
                  Una versión estilizada del clásico símbolo Yin Yang, 
                  incorporando detalles decorativos que añaden profundidad y 
                  textura al diseño. Ideal para quienes buscan una interpretación 
                  artística de este símbolo de dualidad.
                `,
              },
            ],
            folder
          );
        })()}
        {(() => {
          return listarEjercicios(
            [
              {
                filename: "ejercicio-12",
                titulo: `Estrella Tartésica concéntrica recursiva`,
                descripcion: `
                  Un diseño geométrico inspirado en la estrella tartésica, 
                  combinado con un patrón hipnótico que crea una sensación 
                  de movimiento visual. El uso de contrastes y formas 
                  repetitivas intensifica su efecto óptico.
                `,
              },
            ],
            carpeta_ejercicio("complex")
          );
        })()}
        {(() => {
          return listarEjercicios(
            [
              {
                filename: "ejercicio-13",
                titulo: `Sharingan`,
                descripcion: (
                  <_>
                    Primeramente enfocamos nuestra atención en la parte central
                    del ojo: la pupila. Utilizamos propiedades de CSS como
                    bordes circulares, gradientes y transformaciones para
                    reproducir los detalles rojos y el distintivo patrón del
                    Sharingan, sin incluir la esclerótica ni otras partes.
                  </_>
                ),
              },
              {
                filename: "ejercicio-14",
                titulo: `Sharingan contorno ojo`,
                descripcion: (
                  <_>
                    Aquí incorporamos la esclerótica —la zona blanca— y unas
                    pestañas que enmarcan la pupila Sharingan. Ajustamos el
                    tamaño, el posicionamiento y el color de fondo en CSS. Para
                    dar forma a las pestañas, manipulamos el grosor de los
                    bordes y utilizamos un border-radius de 57% 43% 59% 41% /
                    90% 0% 100% 10%, lo que nos permite lograr una apariencia
                    más completa del ojo.
                    <br />
                    <br />
                    <AnexoBorderRadiusGen />
                  </_>
                ),
              },
              {
                filename: "ejercicio-15",
                titulo: `Sharingan dos ojos`,
                descripcion: (
                  <_>
                    Duplicamos los elementos creados para simular dos ojos
                    Sharingan. Esto incluye la pupila con su patrón único,
                    además de la esclerótica y las pestañas en cada ojo. Para
                    obtener un diseño equilibrado, asignamos un fondo radial con
                    tonalidades azules característicos del clan Uchiha, creando
                    un ambiente más acorde con la temática. Como detalle
                    adicional, añadimos dos brillos circulares en las pupilas
                    para realzar aún más el efecto final.
                    <br />
                    <br />
                    <AnexoBorderRadiusGen />
                  </_>
                ),
              },
              {
                filename: "ejercicio-16",
                titulo: `Esfera de una estrella`,
                descripcion: (
                  <_>
                    Este ejercicio se centra en la reproducción de la esfera de
                    1 estrella de Dragon Ball. El reto consiste en emplear
                    técnicas de gradientes radiales para las sombras y brillos,
                    todo mediante la utilización exclusiva de código CSS.
                  </_>
                ),
              },
            ],
            carpeta_ejercicio("simple")
          );
        })()}
      </div>
      <br />
      <Footer />
    </div>
  );

  function Glosario() {
    return (
      <DivBody>
        <Typography variant="h4">Glosario de clases generales</Typography>
        <br />
        <div style={{ color: "lightgray", fontSize: "smaller" }}>
          {hacer_glosario({
            ".diseño": (
              <_>
                Abre un contexto con <code>position: relative;</code> para
                ubicar elementos. Su particularidad es el uso de{" "}
                <code>position: relative;</code>.
              </_>
            ),
            ".capa": (
              <_>
                Crea capas usando <code>position: absolute;</code> que se ubican
                dentro de un diseño o de otras capas. Su distintivo es utilizar{" "}
                <code>position: absolute;</code>.
              </_>
            ),
            ".screen": (
              <_>
                Aplica <code>mix-blend-mode: screen;</code> para combinar todas
                las capas hijas con este modo de fusión.
              </_>
            ),
            ".roja, .azul, .verde, .naranja, .blanca, .negra": (
              <_>
                Sirven como identificadores rápidos para asignar un color de
                fondo a la capa usando <code>background: /*valor-color*/;</code>
                .
              </_>
            ),
            ".texto": (
              <_>
                Ajusta la capa al tamaño exacto del texto sin dejar excedentes,
                gracias a <code>width: fit-content;</code> y{" "}
                <code>height: fit-content;</code>.
              </_>
            ),
            ".bolder": "Muestra el texto en negrita.",
            ".rotar-45": (
              <_>
                Rota la capa -45° (negativo, cuarto cuadrante) junto con todos
                sus elementos. Internamente aplica{" "}
                <code>transform: rotate(-45deg);</code>.
              </_>
            ),
            ".rotar45": (
              <_>
                Rota la capa +45° (positivo, primer cuadrante) junto con todos
                sus elementos. Internamente aplica{" "}
                <code>transform: rotate(45deg);</code>.
              </_>
            ),
            ".capas-blancas": (
              <_>Establece un fondo blanco para todas las capas hijas.</_>
            ),
            ".centrar": (
              <_>
                Centra la capa en su contexto asignado usando{" "}
                <code>
                  left: 50%; top: 50%; transform: translate(-50%, -50%);
                </code>
                .
              </_>
            ),
            ".centralizar-capas": (
              <_>
                Ubica el centro de la capa en las coordenadas definidas por{" "}
                <code>left</code> y <code>top</code>. A diferencia de{" "}
                <code>.centrar</code>, esta clase solo aplica{" "}
                <code>transform: translate(-50%, -50%);</code>.
              </_>
            ),
            ".circular": (
              <_>
                Convierte la capa en un círculo al aplicar{" "}
                <code>border-radius: 50%;</code>.
              </_>
            ),
          })}
        </div>
      </DivBody>
    );
  }

  function AnexoBorderRadiusGen() {
    return (
      <Paper style={{ padding: "20px" }}>
        Para profundizar en la personalización de la forma que contornea los
        ojos y sus pestañas, se recomienda visitar la herramienta en línea
        <br />
        <br />
        <Link href="https://9elements.github.io/fancy-border-radius/">
          <b>Fancy Border Radius Generator</b>{" "}
          <small>(https://9elements.github.io/fancy-border-radius/)</small>
        </Link>
        <br />
        <br />
        la cual permite manipular fácilmente las curvas de los bordes
        (border-radius) y visualizar los cambios en tiempo real.
      </Paper>
    );
  }

  function VideosRelacionados() {
    if (playground_id) {
      return;
    }
    const lista_enlace = "list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF";
    return (
      <PaperBody>
        <Typography variant="h3">Serie de videos</Typography>
        <br />
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
          className={fluidCSS()
            .ltX(650, {
              justifyContent: "center",
            })
            .end()}
        >
          {[
            "https://www.youtube.com/embed/kmFAUp7SwAs",
            "https://www.youtube.com/embed/LGjkbsE6_5I",
            "https://www.youtube.com/embed/9Wyf2yQCFgQ",
            "https://www.youtube.com/embed/ZfFNVlyti_4",
            "https://www.youtube.com/embed/pymesYfmeKc",
            "https://www.youtube.com/embed/jm0cU4AYjSo",
            "https://www.youtube.com/embed/sZnXEjxNExE",
            "https://www.youtube.com/embed/iBYIySkpr40",
          ]
            .map((url) => `${url}?${lista_enlace}`)
            .map((video_url) => (
              <div
                className={fluidCSS()
                  .btwX(650, 900, {
                    width: ["max(60%, 250px)", "47%", "30%"],
                  })
                  .end("miniatura-youtube")}
              >
                <lite-youtube
                  videoid={
                    video_url
                      .replace("https://www.youtube.com/embed/", "")
                      .split("?")[0]
                  }
                />
                <center className="pad-20px">
                  <Link
                    href={video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    Abrir&nbsp;&nbsp;
                    <i className="fa-solid fa-up-right-from-square" />
                  </Link>
                </center>
              </div>
            ))}
        </div>
      </PaperBody>
    );
  }

  function carpeta_ejercicio(nombre) {
    return pathjoin(rootfolder, "ejercicios", nombre);
  }

  function listarEjercicios(info, folder) {
    return info
      .filter(filtrarEjercicioID)
      .map((info) => <PresentarEjercicio {...{ info, folder }} />);
  }

  function PresentarEjercicio({ info, folder }) {
    return (
      <PresentacionPlayground
        {...{
          titulo: info.titulo,
          descripcion: info.descripcion,
          nombre_proyecto: info.filename,
          index_codemirror: indice_codemirror_contador++,
          extra_js: () => sin_consola(),
          HTML: force_extension(pathjoin(folder, info.filename), "html"),
          CSS: [
            force_extension(pathjoin(folder, info.filename), "css"),
            pathjoin(rootfolder, "ejercicios.css"),
          ],
        }}
      />
    );
  }
}

function hacer_glosario(obj) {
  return Object.entries(obj).map(([k, v]) => (
    <div className="padt-10px">
      <b className="c-skyblue">{k}</b>: {v}
    </div>
  ));
}

function PresentacionPlayground({
  index_codemirror,
  titulo,
  descripcion,
  nombre_proyecto,
  HTML,
  CSS,
  extra_js,
}) {
  return (
    <PaperBody>
      <br />
      <Typography variant="h4">{titulo}</Typography>
      <br />
      <ID_y_Herramientas variant="h4" />
      <br />
      <hr />
      <br />
      <Typography variant="caption" color="lightgray">
        {descripcion}
      </Typography>
      <br />
      <br />
      <Editor_en_linea
        playground_extra_clases={""}
        nombre_proyecto={nombre_proyecto}
        plantilla_HTML={template_html}
        files={{
          HTML,
          CSS,
        }}
        extra_js={extra_js}
        index={index_codemirror}
        ocultar_pestaña_JS={true}
        ocultar_pestaña_JSX={true}
      />
      {/*       <Codemirror_fluid
        templateHTML="recurrente/template.html"
        index={index_codemirror}
        nombre_proyecto={nombre_proyecto}
        files={{
          HTML,
          CSS,
        }}
        hideJS
        hideJSX
      /> */}
    </PaperBody>
  );

  function ID_y_Herramientas({ variant }) {
    return (
      <Typography variant={variant} style={{ color: "steelblue" }}>
        <div
          style={{
            display: "inline-block",
            paddingRight: "30px",
          }}
        >
          {capitalize(
            nombre_proyecto.replaceAll("-", " ").replaceAll("_", " ")
          )}
        </div>
        {(() => {
          const params = new URLSearchParams(window.location.search);
          params.set("pub", pubid_ajustada(params.get("pub")));
          if (playground_id == nombre_proyecto) {
            params.delete("playground-id");
            const url_delete = `${
              window.location.pathname
            }?${params.toString()}`;
            return (
              <Tooltip title="Remover selección">
                <IconButton style={{ color: "RosyBrown" }} href={url_delete}>
                  <i className="fa-solid fa-filter-circle-xmark"></i>
                </IconButton>
              </Tooltip>
            );
          }
          const style_button = { color: "SlateGray" };
          params.set("playground-id", nombre_proyecto);
          const url = `${window.location.origin}/${
            window.location.pathname
          }?${params.toString()}`;

          return [
            <Tooltip title="Copiar enlace">
              <IconButton
                style={style_button}
                onClick={() => navigator.clipboard.writeText(url)}
              >
                <i className="fa-solid fa-link"></i>
              </IconButton>
            </Tooltip>,
            <Tooltip title="filtrar este caso">
              <IconButton style={style_button} href={url}>
                <i className="fa-solid fa-filter"></i>
              </IconButton>
            </Tooltip>,
          ];
        })()}
      </Typography>
    );
  }
}
