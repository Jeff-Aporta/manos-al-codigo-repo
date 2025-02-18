let index_code_mirror = 0;

function Codemirror_fluid(props) {
  const [openDialogDownload, setOpenDialogDownload] = React.useState(false);

  const abrirAlertaDescarga = () => {
    setOpenDialogDownload(true);
  };

  const cerrarAlerta = () => {
    setOpenDialogDownload(false);
  };

  let init = false;

  let editorHTML, editorCSS, editorJS, editorJSX;
  const printWidth = 60;
  const transformar_columna = 1100;

  const textoHTML = React.useRef(HTML ?? "");
  const textoCSS = React.useRef(CSS ?? "");
  const textoJS = React.useRef(JS ?? "");
  const textoJSX = React.useRef(JSX ?? "");

  const ref = React.useRef(null);

  let {
    nombre_proyecto,
    files = {},
    HTML,
    CSS,
    JS,
    JSX,
    index = -1,
    hideHTML = false,
    hideCSS = false,
    hideJS = false,
    hideJSX = false,
  } = props;

  React.useEffect(() => {
    cargarArchivos();

    async function cargarArchivos() {
      if (index != -1 && index <= index_code_mirror) {
        const _html = await procesarArreglo(files.HTML);
        const _css = await procesarArreglo(files.CSS);
        const _js = await procesarArreglo(files.JS);
        const _jsx = await procesarArreglo(files.JSX);
        index_code_mirror++;
        textoHTML.current = _html ?? "";
        textoCSS.current = _css ?? "";
        textoJS.current = _js ?? "";
        textoJSX.current = _jsx ?? "";
        formatearCodigo();
        ejecutarCodigo();
        return;
      }
      setTimeout(cargarArchivos, 1000);
    }

    async function procesarArreglo(arr) {
      let loadText = "";
      if (!arr) return;
      if (!Array.isArray(arr)) {
        arr = [arr];
      }
      for (const file of arr) {
        loadText += await cargar(file);
      }
      return loadText;

      async function cargar(ruta) {
        try {
          const response = await fetch(ruta);
          if (!response.ok) {
            throw new Error(
              "Error al obtener el archivo: " + response.statusText
            );
          }
          const texto = await response.text();
          return texto;
        } catch (error) {}
        return "";
      }
    }
  }, []);

  return <ComponenteRetorno />;

  function ComponenteRetorno() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    React.useLayoutEffect(() => {
      formatearCodigo();
      ejecutarCodigo();
      if (init) {
        crearEditores();
        return;
      }
      init = true;
    }, [width]);

    return (
      <div
        ref={ref}
        className={fluidCSS()
          .gtX(transformar_columna, {
            maxHeight: "400px",
          })
          .ltX(transformar_columna, {
            flexWrap: "wrap",
            flexDirection: "column-reverse",
          })
          .end("codemirror-instance estilo-fila-mini")}
      >
        <PestañasVerticales />
        <iframe
          src="recurrente/template.html"
          id={`output`}
          className={fluidCSS()
            .gtX(transformar_columna, {
              width: "35%",
              aspectRatio: "1",
            })
            .ltX(transformar_columna, {
              width: "100%",
              minHeight: "50vh",
            })
            .end()}
        ></iframe>
        <ConfirmarDescarga
          titulo={`Descargar ${nombre_proyecto}.zip`}
          mensaje="Continuar con la descarga"
        />
      </div>
    );
  }

  function PestañasVerticales() {
    const [valor, setValor] = React.useState(0);

    const manejarCambio = (evento, nuevoValor) => {
      setValor(nuevoValor);
    };

    React.useLayoutEffect(() => {
      crearEditores();
      formatearCodigo();
    }, [valor]);

    const classEditor = fluidCSS()
      .gtX(transformar_columna, {
        maxWidth: "98%",
        width: "calc(100% + 60px)",
      })
      .end("editor-container");

    const editor_html = (
      <div id="editor-html" className={classEditor}>
        <textarea id={`html-code`}>{textoHTML.current}</textarea>
      </div>
    );

    const editor_css = (
      <div id="editor-css" className={classEditor}>
        <textarea id={`css-code`}>{textoCSS.current}</textarea>
      </div>
    );

    const editor_js = (
      <div id="editor-js" className={classEditor}>
        <textarea id={`js-code`}>{textoJS.current}</textarea>
      </div>
    );

    const editor_jsx = (
      <div id="editor-jsx" className={classEditor}>
        <textarea id={`jsx-code`}>{textoJSX.current}</textarea>
      </div>
    );

    let i = 0;
    let j = 0;

    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Tabs
          orientation="vertical"
          value={valor}
          onChange={manejarCambio}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            minHeight: "400px",
          }}
        >
          {hideHTML || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-solid fa-code"></i>}>
                  HTML
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
          {hideCSS || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-brands fa-css"></i>}>
                  CSS
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
          {hideJS || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-brands fa-square-js"></i>}>
                  JS
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
          {hideJSX || (
            <Tab
              label={
                <BotonPestaña icon={<i class="fa-brands fa-react"></i>}>
                  JSX
                </BotonPestaña>
              }
              {...propAccesibilidad(i++)}
            />
          )}
        </Tabs>
        {hideHTML || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_html}
          </TabPanel>
        )}
        {hideCSS || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_css}
          </TabPanel>
        )}
        {hideJS || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_js}
          </TabPanel>
        )}
        {hideJSX || (
          <TabPanel valor={valor} index={j++} className="fullWidth">
            {editor_jsx}
          </TabPanel>
        )}
        <div className="d-none">
          {editor_html}
          {editor_css}
          {editor_js}
          {editor_jsx}
        </div>
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Tooltip title="Ejecutar código" placement="right">
            <IconButton
              variant="contained"
              color="contrast"
              onClick={ejecutarCodigo}
              id="ejecutar-codigo"
            >
              <i className="fa fa-play" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Descargar" placement="right">
            <IconButton
              variant="contained"
              color="contrast"
              onClick={abrirAlertaDescarga}
              id="ejecutar-codigo"
            >
              <i className="fa fa-download" />
            </IconButton>
          </Tooltip>
        </div>
      </Box>
    );

    function BotonPestaña({ icon, children }) {
      return (
        <big
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
            paddingRight: "10px",
          }}
        >
          {icon}
          <b>{children}</b>
        </big>
      );
    }

    function TabPanel(props) {
      const { children, valor, index, ...otros } = props;

      return (
        <div
          role="tabpanel"
          hidden={valor !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...otros}
        >
          {valor === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    function propAccesibilidad(index) {
      return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
      };
    }
  }

  function crearEditores() {
    const idEditores = ["html-code", "css-code", "js-code", "jsx-code"];
    if (!ref.current) {
      return setTimeout(crearEditores, 50);
    }
    editorHTML = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[0]),
      {
        mode: "htmlmixed",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorHTML.on("change", function (instancia, objetoCambio) {
      textoHTML.current = instancia.getValue();
    });
    editorHTML.on("keydown", capturarComando);

    editorCSS = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[1]),
      {
        mode: "text/x-scss",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorCSS.on("change", function (instancia, objetoCambio) {
      textoCSS.current = instancia.getValue();
    });
    editorCSS.on("keydown", capturarComando);

    editorJS = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[2]),
      {
        mode: "javascript",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorJS.on("change", function (instancia, objetoCambio) {
      textoJS.current = instancia.getValue();
    });
    editorJS.on("keydown", capturarComando);

    editorJSX = CodeMirror.fromTextArea(
      ref.current.querySelector("#" + idEditores[3]),
      {
        mode: "javascript",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorJSX.on("change", function (instancia, objetoCambio) {
      textoJSX.current = instancia.getValue();
    });
    editorJSX.on("keydown", capturarComando);

    function capturarComando(cm, evento) {
      if (evento.altKey && evento.shiftKey && evento.key === "F") {
        formatearCodigo();
      }
    }
  }

  function ConfirmarDescarga({
    textoConfirmar = "Descargar",
    textoCancelar = "Cancelar",
    titulo = "Descargar el ejercicio",
    mensaje = "¿Estás seguro de querer descargar el ejercicio?",
  }) {
    return (
      <Dialog
        open={openDialogDownload}
        onClose={cerrarAlerta}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText>{mensaje}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              cerrarAlerta();
            }}
          >
            {textoCancelar}
          </Button>
          <Button
            onClick={() => {
              cerrarAlerta();
              descargarCodigo({
                archivos: {
                  "index.html": prettier.format(
                    `
                    <!DOCTYPE html>
                    <html lang="es">
                      <head>
                        <title>${nombre_proyecto}</title>
  
                        <script
                          type="text/javascript"
                          src="https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js"
                        ></script>
                
                        <script>
                          asciiMap.CLI.react_mui_fa();
                          asciiMap.CLI.fluidCSS();
                          asciiMap.CLI.JS2CSS();
                        </script>
  
                        <script type="text/babel">
                          if (typeof window != "undefined" && window["MaterialUI"]) {
                            Object.assign(window, window["MaterialUI"]);
                          }
                        </script>
  
                        ${
                          textoCSS
                            ? `<link rel="stylesheet" href="styles.css" />`
                            : ""
                        }
                        ${
                          textoJS
                            ? `<script src="script.js" defer></script>`
                            : ""
                        }
                        ${
                          textoJSX
                            ? `<script type="text/babel" src="script.jsx"></script>`
                            : ""
                        }
                      </head>
                      <body>
                        ${textoHTML.current}
                      </body>
                    </html>
                    `,
                    {
                      parser: "html",
                      plugins: prettierPlugins,
                    }
                  ),
                  ...(() => {
                    const retorno = {};
                    if (textoCSS) {
                      retorno["styles.css"] = textoCSS;
                    }
                    if (textoJS) {
                      retorno["script.js"] = textoJS;
                    }
                    if (textoJSX) {
                      retorno["script.jsx"] = textoJSX;
                    }
                    return retorno;
                  })(),
                },
                nombre_proyecto: nombre_proyecto,
              });
            }}
            autoFocus
          >
            {textoConfirmar}
          </Button>
        </DialogActions>
      </Dialog>
    );

    function descargarCodigo({ archivos }) {
      if (!archivos) {
        console.error("No hay archivos para descargar");
      }

      const zip = new JSZip();

      const carpeta = zip.folder(nombre_proyecto ?? "Proyecto");

      Object.entries(archivos).forEach(([nombre, contenido]) => {
        carpeta.file(nombre, contenido);
      });

      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, nombre_proyecto + ".zip");
      });
    }
  }

  function ejecutarCodigo() {
    const iframe = ref.current.querySelector("iframe");
    const docIframe = iframe.contentDocument || iframe.contentWindow.document;
    modContenedor(
      docIframe.querySelector("#contenido-html-playground"),
      textoHTML.current
    );
    modContenedor(
      docIframe.querySelector("#contenido-css-playground"),
      textoCSS.current
    );
    modContenedor(
      docIframe.querySelector("#contenido-js-playground"),
      textoJS.current
    );
    modContenedor(
      docIframe.querySelector("#contenido-jsx-playground"),
      textoJSX.current
    );
    if (!docIframe.querySelector("#contenido-html-playground")) {
      setTimeout(ejecutarCodigo, 100);
    }

    function modContenedor(contenedor, contenido) {
      if (!contenedor || !contenido) {
        return;
      }
      if (contenedor.innerHTML != contenido) {
        contenedor.innerHTML = contenido;
      }
    }
  }

  // Función para formatear el código usando Prettier
  function formatearCodigo() {
    if (!editorHTML || !editorCSS || !editorJS || !editorJSX) {
      return;
    }
    try {
      var contenidoHTML = textoHTML.current;
      var contenidoCSS = textoCSS.current;
      var contenidoJS = textoJS.current;
      var contenidoJSX = textoJSX.current;

      let htmlFormateado = prettier.format(contenidoHTML, {
        parser: "html",
        plugins: prettierPlugins,
        printWidth,
      });
      let cssFormateado = prettier.format(contenidoCSS, {
        parser: "css",
        plugins: prettierPlugins,
        printWidth,
      });
      let jsFormateado = prettier.format(contenidoJS, {
        parser: "babel",
        plugins: prettierPlugins,
        printWidth,
      });

      let jsxFormateado = prettier.format(contenidoJSX, {
        parser: "babel",
        plugins: prettierPlugins,
        printWidth,
      });

      editorHTML.setValue(htmlFormateado);
      editorCSS.setValue(cssFormateado);
      editorJS.setValue(jsFormateado);
      editorJSX.setValue(jsxFormateado);

      textoHTML.current = htmlFormateado;
      textoCSS.current = cssFormateado;
      textoJS.current = jsFormateado;
      textoJSX.current = jsxFormateado;
    } catch (error) {
      alert("Error al formatear el código: " + error.message);
    }
  }
}
