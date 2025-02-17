const informacion = {
  "ejercicio-1": {
    titulo: `Canales de Color a 45°`,
    descripcion: `
      Un ejercicio que demuestra cómo la superposición de capas de color 
      (rojo, verde y azul) puede generar efectos de mezcla llamativos en 
      un fondo oscuro. El resultado es un cuadrado con un vibrante juego 
      de luces y sombras.
    `,
  },
  "ejercicio-2": {
    titulo: `Dispersión de Canales de Color`,
    descripcion: `
      Este diseño presenta un cuadrado rodeado de un halo luminoso, creado 
      al combinar los canales rojo, verde y azul. Permite apreciar cómo cada 
      canal aporta una intensidad diferente, produciendo un efecto de luz envolvente.
    `,
  },
  "ejercicio-3": {
    titulo: `Corazón en Colores Combinados`,
    descripcion: `
      Un diseño que simula la fusión de colores primarios (rojo, verde y azul) 
      dentro de una figura con forma de corazón. Ilustra la mezcla aditiva de 
      luz y cómo se generan nuevos tonos en la intersección de las capas de color.
    `,
  },
  "ejercicio-4": {
    titulo: `Estrella Tartésica`,
    descripcion: `
      Un diseño geométrico en el que la superposición de colores crea una estrella 
      simétrica con bordes bien definidos. Representa la armonía entre las formas y 
      el color, destacando los efectos de intersección entre las capas de luz.
    `,
  },
  "ejercicio-5": {
    titulo: `Logo Mastercard`,
    descripcion: `
      Un diseño que reproduce el icónico logo de Mastercard, con dos círculos 
      superpuestos en tonos naranja y rojo. Destaca la sencillez de formas y 
      la elegante transición de color que simboliza la fusión de la marca.
    `,
  },
  "ejercicio-6": {
    titulo: `Logo Domino’s Pizza`,
    descripcion: `
      Una versión estilizada del famoso dominó en rojo y azul, característico 
      de la cadena de pizzerías. El diseño mantiene la esencia de la marca 
      al mostrar su distintivo esquema de colores y forma.
    `,
  },
  "ejercicio-7": {
    titulo: `Logo London Underground`,
    descripcion: `
      Una recreación del famoso logo del metro de Londres, compuesto por un 
      círculo rojo y una barra azul en el centro con texto en blanco. Su diseño 
      icónico simboliza el transporte subterráneo de la ciudad y es reconocido a 
      nivel mundial.
    `,
  },
  "ejercicio-8": {
    titulo: `Logo de Instagram con Fondo Sólido`,
    descripcion: `
      Representación minimalista del logo de Instagram, utilizando un fondo sólido para destacar la icónica forma de la cámara. Se enfoca en la simplicidad del diseño y la claridad del símbolo sin efectos de degradado.
    `,
  },
  "ejercicio-9": {
    titulo: `Logo de Instagram con Degradado`,
    descripcion: `
      Versión vibrante del logo de Instagram, empleando un degradado de colores cálidos que imita la identidad visual oficial de la marca. El efecto da una sensación de modernidad y dinamismo al diseño.
    `,
  },
  "ejercicio-10": {
    titulo: `Símbolo de Yin Yang Simple`,
    descripcion: `
      Un diseño limpio y esencial del símbolo del Yin Yang, que representa el equilibrio entre fuerzas opuestas. Se utilizan formas básicas y contrastes nítidos en blanco y negro para resaltar su significado filosófico.
    `,
  },
  "ejercicio-11": {
    titulo: `Símbolo de Yin Yang Decorado`,
    descripcion: `
      Una versión estilizada del clásico símbolo Yin Yang, incorporando detalles decorativos que añaden profundidad y textura al diseño. Ideal para quienes buscan una interpretación artística de este símbolo de dualidad.
    `,
  },
  "ejercicio-12": {
    titulo: `Estrella Tartésica con Patrón de Hipnosis`,
    descripcion: `
      Un diseño geométrico inspirado en la estrella tartésica, combinado con un patrón hipnótico que crea una sensación de movimiento visual. El uso de contrastes y formas repetitivas intensifica su efecto óptico.
    `,
  },
};

ReactDOM.render(App(), document.getElementById("root"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
                <i class="fa-brands fa-github" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Podcast" placement="bottom">
              <IconButton
                href="https://www.youtube.com/playlist?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF"
                target="_blank"
                style={{ fontSize: "120%" }}
              >
                <i class="fa-brands fa-youtube" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div id="contenido">
        <Typography variant="h1">Desafios de diseño CSS</Typography>
        <br />
        <hr />
        <br />
        {[
          ...Array.from(
            { length: 4 },
            ({ index_init = 1, subfolder = "screen" } = {}, n) =>
              DivCodemirror(n, index_init, subfolder)
          ),
          ...Array.from(
            { length: 7 },
            ({ index_init = 5, subfolder = "simple" } = {}, n) =>
              DivCodemirror(n, index_init, subfolder)
          ),
          ...Array.from(
            { length: 1 },
            ({ index_init = 12, subfolder = "complex" } = {}, n) =>
              DivCodemirror(n, index_init, subfolder)
          ),
        ]}
        <Paper elevation={4} style={{ padding: "10px" }}>
          <Typography variant="h3">Recorrido de videos</Typography>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
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
            ].map((video_url) => (
              <iframe
                width="320"
                height="180"
                className="miniatura-youtube"
                src={video_url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ))}
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

function DivCodemirror(n, index_init, subfolder) {
  return (
    <Paper
      elevation={4}
      style={{
        padding: "20px",
        marginBottom: "30px",
      }}
    >
      <Typography variant="h2">
        {informacion[`ejercicio-${n + index_init}`]?.titulo}
      </Typography>
      <br />
      <Typography variant="h4" style={{ color: "steelblue" }}>{`(Ejercicio ${
        n + index_init
      })`}</Typography>
      <br />
      <p>{informacion[`ejercicio-${n + index_init}`]?.descripcion}</p>
      <Codemirror_fluid
        nombre_proyecto={`ejercicio-${n + index_init}-position-css`}
        files={{
          HTML: `desafios-de-diseño-css/ejercicios/${subfolder}/ejercicio-${
            n + index_init
          }.html`,
          CSS: [
            "desafios-de-diseño-css/ejercicios.css",
            `desafios-de-diseño-css/ejercicios/${subfolder}/ejercicio-${
              n + index_init
            }.css`,
          ],
        }}
        hideJS
        hideJSX
      />
    </Paper>
  );
}
