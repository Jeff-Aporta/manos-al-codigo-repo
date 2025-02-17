function loadStringsSync(urls) {
  if (!Array.isArray(urls)) {
    urls = [urls];
  }
  return urls
    .map((url) => {
      if (!url) {
        return;
      }
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);

      if (xhr.status === 200) {
        return xhr.responseText;
      } else {
        console.error("Error al cargar el archivo:", xhr.status);
      }
    })
    .join("\n\n");
}
