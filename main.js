const params = new URLSearchParams(window.location.search);

const pub = params.get("pub");

const pub_estructura = {
  "desafios-de-diseno-css": {
    root: "css/position",
    tree: (root, node) => {
      asciiMap
        .tree(
          "https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/"
        )
        .js("lite-yt-embed")
        .css("lite-yt-embed")
        .writehtml();
      asciiMap.CLI.myUI().playground();
    },
  },
  bienvenido: {
    root: "", // No es un proyecto, sólo un alias
    tree: (root) => {
      root.newBranch("src/jsx", (src) => {
        src.jsxcss(`bienvenido`);
      });
    },
  },
  trivia: {
    root: "trivia",
    tree: (root, node) => {
      let theme_ = params.get("theme") ?? "ep9";
      switch (theme_) {
        case "ep9":
          params.set("theme", "00-css-basic");
          recargar_actualizando_parametros();
          return;
      }
      node.jsx(`bancos/${theme_}`);
    },
  },
};

var rootfolder = getPub().root; // identificador de carpeta raíz de lo que se desea cargar.

function getPub() {
  return pub_estructura[pubid_ajustada(pub)];
}

function recargar_actualizando_parametros() {
  const nr = window.location.pathname + "?" + params.toString();
  window.location.href = nr;
  window.location.assign(nr);
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

function generar_URL(nuevos_parametros, usarActuales = true) {
  const parametros_configurados = {};
  if (usarActuales) {
    for (const [key, value] of params.entries()) {
      parametros_configurados[key] = value;
    }
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

function pubid_ajustada(p) {
  if (!p) {
    p = pub;
  }
  if (p) {
    return p
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("_", "-");
  }
}
