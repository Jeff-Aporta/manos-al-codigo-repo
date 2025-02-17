function Codemirror_fluid(props) {
  const [openDialogDownload, setOpenDialogDownload] = React.useState(false);

  const abrirAlertaDescarga = () => {
    setOpenDialogDownload(true);
  };

  const cerrarAlerta = () => {
    setOpenDialogDownload(false);
  };

  let init = false;
  const idR = Math.random().toString(36).replace("0.", "");

  let editorHTML, editorCSS, editorJS, editorJSX;
  let textoHTML, textoCSS, textoJS, textoJSX;
  const printWidth = 60;
  const transformar_columna = 1100;

  let {
    nombre_proyecto,
    files = {},
    HTML,
    CSS,
    JS,
    JSX,
    hideHTML = false,
    hideCSS = false,
    hideJS = false,
    hideJSX = false,
  } = props;

  textoHTML = HTML ?? loadStringsSync(files.HTML) ?? "";
  textoCSS = CSS ?? loadStringsSync(files.CSS) ?? "";
  textoJS = JS ?? loadStringsSync(files.JS) ?? "";
  textoJSX = JSX ?? loadStringsSync(files.JSX) ?? "";

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
      if (init) {
        crearEditores();
      } else {
        ejecutarCodigo();
      }
      fluidCSS.actualizarStyle();
      init = true;
    }, [width]);

    return (
      <div
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
          id={`output-${idR}`}
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
        <textarea id={`html-code-${idR}`}>{textoHTML}</textarea>
      </div>
    );

    const editor_css = (
      <div id="editor-css" className={classEditor}>
        <textarea id={`css-code-${idR}`}>{textoCSS}</textarea>
      </div>
    );

    const editor_js = (
      <div id="editor-js" className={classEditor}>
        <textarea id={`js-code-${idR}`}>{textoJS}</textarea>
      </div>
    );

    const editor_jsx = (
      <div id="editor-jsx" className={classEditor}>
        <textarea id={`jsx-code-${idR}`}>{textoJSX}</textarea>
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
    const idEditores = [
      "html-code-" + idR,
      "css-code-" + idR,
      "js-code-" + idR,
      "jsx-code-" + idR,
    ];
    editorHTML = CodeMirror.fromTextArea(
      document.getElementById(idEditores[0]),
      {
        mode: "htmlmixed",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorHTML.on("change", function (instancia, objetoCambio) {
      textoHTML = instancia.getValue();
    });
    editorHTML.on("keydown", capturarComando);

    editorCSS = CodeMirror.fromTextArea(
      document.getElementById(idEditores[1]),
      {
        mode: "text/x-scss",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorCSS.on("change", function (instancia, objetoCambio) {
      textoCSS = instancia.getValue();
    });
    editorCSS.on("keydown", capturarComando);

    editorJS = CodeMirror.fromTextArea(document.getElementById(idEditores[2]), {
      mode: "javascript",
      lineNumbers: true,
      theme: asciiMap.CLI.codemirror_theme_name(),
    });

    editorJS.on("change", function (instancia, objetoCambio) {
      textoJS = instancia.getValue();
    });
    editorJS.on("keydown", capturarComando);

    editorJSX = CodeMirror.fromTextArea(
      document.getElementById(idEditores[3]),
      {
        mode: "javascript",
        lineNumbers: true,
        theme: asciiMap.CLI.codemirror_theme_name(),
      }
    );

    editorJSX.on("change", function (instancia, objetoCambio) {
      textoJSX = instancia.getValue();
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
                        ${textoHTML}
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
    var contenidoHTML = editorHTML.getValue();
    var contenidoCSS = editorCSS.getValue();
    var contenidoJS = editorJS.getValue();
    var contenidoJSX = editorJSX.getValue();
    var iframe = document.getElementById(`output-${idR}`);
    var docIframe = iframe.contentDocument || iframe.contentWindow.document;
    docIframe.open();
    docIframe.write(`
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <style>${contenidoCSS}</style>
    
            <script
              type="text/javascript"
              src="https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js"
            ></script>
    
            <script>
              asciiMap.CLI.react_mui_fa();
              asciiMap.CLI.fluidCSS();
              asciiMap.CLI.JS2CSS();
            </script>
          </head>
          <body>
            ${contenidoHTML}
          </body>
          <script>${contenidoJS}</script>
          <script type="text/babel">
            if (typeof window != "undefined" && window["MaterialUI"]) {
              Object.assign(window, window["MaterialUI"]);
            }
            ${contenidoJSX}
          </script>
          </html>
      `);
    docIframe.close();
    formatearCodigo();
  }

  // Función para formatear el código usando Prettier
  function formatearCodigo() {
    try {
      var contenidoHTML = textoHTML;
      var contenidoCSS = textoCSS;
      var contenidoJS = textoJS;
      var contenidoJSX = textoJSX;

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

      textoHTML = htmlFormateado;
      textoCSS = cssFormateado;
      textoJS = jsFormateado;
      textoJSX = jsxFormateado;
    } catch (error) {
      alert("Error al formatear el código: " + error.message);
    }
  }
}
