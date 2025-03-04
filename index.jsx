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