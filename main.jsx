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
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "150%",
        borderBottom: "1px solid steelblue",
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
            Manos al código
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
