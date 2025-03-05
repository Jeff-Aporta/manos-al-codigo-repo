function _(props) {
  return <React.Fragment {...props} />;
}

function arreglar_conflicto_html(str) {
  return [
    { simbolo: "<", expresion: "&lt;" },
    { simbolo: ">", expresion: "&gt;" },
  ].reduce((acc, cur) => {
    return acc.replaceAll(cur.simbolo, cur.expresion);
  }, str);
}

function Header() {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "150%",
        borderBottom: "1px solid rgba(70, 130, 180, 0.5)",
      }}
    >
      <Tooltip title="Bienvenida" placement="right">
        <Link
          href={generar_URL(
            {
              pub: "bienvenido",
            },
            false
          )}
          color="inherit"
          underline="none"
          className="bright-hover-2"
          rel="noopener noreferrer"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <img src="src/img/logo_128x128.png" height="50" alt="" />
            <span
              className={fluidCSS()
                .ltX(500, {
                  display: "none",
                })
                .end()}
            >
              Manos al código
            </span>
          </div>
        </Link>
      </Tooltip>
      <div>
        <div style={{ padding: "10px" }}>
          <Tooltip title="Repositorio de Manos al código" placement="left">
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

function Footer() {
  return (
    <Paper
      elevation={0}
      className="pad-20px d-flex jc-end ai-end fs-150p"
      style={{ height: "400px" }}
    >
      Manos al código.
    </Paper>
  );
}

function PaperBody(props) {
  return (
    <Paper
      {...props}
      className={fluidCSS()
        .lerpX(320, 500, {
          margin: [0, 20],
          padding: [10, 20],
        })
        .end(props.className)}
    />
  );
}

function DivBody(props) {
  return (
    <div
      {...props}
      className={fluidCSS()
        .lerpX(320, 500, {
          margin: [0, 20],
        })
        .end(props.className)}
    />
  );
}

function iniciarBGApp_1_radialGrads({
  query = ".app",
  str = [],
  tono_inicial = 240,
  iteraciones = 2,
  saltos_entre_angulos = 30,
  radio = 800,
  desface_y = 300,
} = {}) {
  JS2CSS.insertStyle({
    id: "body-multicolor",
    objJs: {
      [query]: {
        background: `${(() => {
          for (let i = 0; i < iteraciones; i++) {
            str.push(`radial-gradient(
              circle at ${i % 2 == 1 ? "90%" : "10%"} ${i * 1500 - desface_y}px,
              hsla(${tono_inicial + i * saltos_entre_angulos}, 100%, 50%, 0.3),
              transparent ${radio}px
            )`);
          }
          for (let i = 0; i < iteraciones; i++) {
            str.push(`radial-gradient(
            circle at ${i % 2 == 0 ? "90%" : "10%"} ${i * 1300 + desface_y}px,
            hsla(${
              tono_inicial + i * saltos_entre_angulos - 2 * saltos_entre_angulos
            }, 100%, 50%, 0.2),
            transparent ${radio}px
          )`);
          }
          str = str.join(",");
          return str;
        })()}`,
      },
    },
  });
}
