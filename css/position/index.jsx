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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div id="contenido">
        <Typography variant="h1">
          <b>
            <span>
              {!playground_id || playground_id.lenght > 1
                ? "Desafios"
                : "Desafio"}
            </span>
            &nbsp;
            <span>de diseño CSS</span>
          </b>
        </Typography>
        <br />
        <hr />
        <br />
        <Paper className="pad-20px">
          <Typography variant="h3">Sumario de clases</Typography>
          <br />
          <hr />
          <br />
          {hacer_sumario({
            ".diseño":
              "abre un contexto position relative para ubicar elementos.",
            ".capa":
              "crea capas con position absolue que se contextualizan en diseños o capas.",
            ".roja, .azul, .verde, .naranja, .blanca, .negra":
              "asigna colores a la capa.",
            ".texto":
              "ajusta la capa al tamaño del texto sin dejar excedentes.",
            ".bolder": "ajusta el texto en negrita.",
            ".rotar-45": "rota la capa -45 grados.",
            ".rotar45": "rota la capa 45 grados.",
            ".capas-blancas":
              "establece todas las capas hijas en fondo blanco.",
            ".centrar": "centra y centraliza la capa en el contexto asignado.",
            ".centralizar-capas":
              "pone el centro de la capa en la coordenada asignada en left y top.",
            ".circular": "convierte la capa en circulo.",
          })}
        </Paper>
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
                    <Typography variant="h4">Sumario</Typography>
                    <br />
                    {hacer_sumario({
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
            ],
            carpeta_ejercicio("simple")
          );
        })()}
      </div>
      <br />
      <Paper
        elevation={6}
        className="pad-20px d-flex jc-end ai-end fs-150p"
        style={{ height: "400px" }}
      >
        Manos al código.
      </Paper>
    </ThemeProvider>
  );

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
    return (
      <Paper className="pad-20px">
        <Typography variant="h3">Serie de videos</Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            "https://www.youtube.com/embed/kmFAUp7SwAs?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF",
            "https://www.youtube.com/embed/LGjkbsE6_5I?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF",
            "https://www.youtube.com/embed/9Wyf2yQCFgQ?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF",
            "https://www.youtube.com/embed/ZfFNVlyti_4?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF",
            "https://www.youtube.com/embed/pymesYfmeKc?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF",
            "https://www.youtube.com/embed/jm0cU4AYjSo?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF",
            "https://www.youtube.com/embed/sZnXEjxNExE?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF",
          ].map((video_url) => (
            <iframe
              width="320"
              height="180"
              className={fluidCSS()
                .btwX([300, 1000], {})
                .end("miniatura-youtube")}
              src={video_url}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </Paper>
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

function hacer_sumario(obj) {
  return Object.entries(obj).map(([k, v]) => (
    <div>
      <b className="c-skyblue">{k}</b>: {v}
    </div>
  ));
}

function Header() {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "200%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
        }}
      >
        <img src="src/img/logo_128x128.png" height="60" alt="" />
        Manos al código
      </div>
      <div>
        <div style={{ padding: "10px" }}>
          <Tooltip title="Repositorio de Manos al código" placement="bottom">
            <IconButton
              href="https://github.com/Jeff-Aporta/manos-al-codigo-repo"
              target="_blank"
              style={{ fontSize: "120%" }}
            >
              <i className="fa-brands fa-github" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Podcast" placement="bottom">
            <IconButton
              href="https://www.youtube.com/playlist?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF"
              target="_blank"
              style={{ fontSize: "120%" }}
            >
              <i className="fa-brands fa-youtube" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
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
    <Paper
      elevation={4}
      style={{
        padding: "20px",
        marginBottom: "30px",
      }}
    >
      <Typography variant="h3">
        <b>{titulo}</b>
      </Typography>
      <br />
      <Typography variant="h4" style={{ color: "steelblue" }}>
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

          const [estadoVentanaURL, setEstadoVentanaURL] = React.useState(false);

          const abrirVentanaURL = () => {
            navigator.clipboard.writeText(url);
            setTimeout(cerrarVentanaURL, 15000);
            setEstadoVentanaURL(true);
          };
          const cerrarVentanaURL = () => {
            setEstadoVentanaURL(false);
          };

          return [
            <Tooltip title="Copiar enlace">
              <IconButton style={style_button} onClick={abrirVentanaURL}>
                <i className="fa-solid fa-link"></i>
              </IconButton>
            </Tooltip>,
            <Tooltip title="filtrar este caso">
              <IconButton style={style_button} href={url}>
                <i className="fa-solid fa-filter"></i>
              </IconButton>
            </Tooltip>,
            <Dialog
              elevation={6}
              open={estadoVentanaURL}
              onClose={cerrarVentanaURL}
              fullWidth
            >
              <DialogTitle>URL</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  label="URL con filtro"
                  type="text"
                  id="URL-con-filtro"
                  fullWidth
                  maxWidth="xl"
                  variant="standard"
                  editable="false"
                  value={url}
                  onClick={() => {
                    navigator.clipboard.writeText(url);
                    document.querySelector("#URL-con-filtro").select();
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={cerrarVentanaURL}>Cerrar</Button>
                <Button href={url} variant="contained">
                  Filtrar
                </Button>
              </DialogActions>
            </Dialog>,
          ];
        })()}
      </Typography>
      <br />
      <p>{descripcion}</p>
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
    </Paper>
  );
}

setTimeout(() => {
  ReactDOM.render(App(), document.getElementById("root"));
});
