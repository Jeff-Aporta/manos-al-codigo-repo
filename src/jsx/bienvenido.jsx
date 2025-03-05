JS2CSS.insertStyle({
  id: "body-multicolor",
  objJs: {
    ".app": {
      background: `${(() => {
        let str = [];
        const tono_inicial = 240;
        const iteraciones = 5;
        const saltos_entre_angulos = 30;
        const radio = 800;
        const desface_y = 300;
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
          }, 100%, 50%, 0.3),
          transparent ${radio}px
        )`);
        }
        str = str.join(",");
        console.log(str);
        return str;
      })()}`,
    },
  },
});

function App() {
  return (
    <_>
      <div className="app">
        <Header />
        <BannerInicial />
        <hr />
        <IndiceTemas />
        <Footer />
      </div>
    </_>
  );

  function BannerInicial() {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "70px",
        }}
      >
        <Typography variant="h2">
          <b>
            Proyecto educativo{" "}
            <span style={{ color: "RoyalBlue" }}>En línea</span>
          </b>
        </Typography>
        <br />
        <Typography
          variant="h5"
          color="secondary"
          className={fluidCSS()
            .ltX(500, {
              fontSize: "small",
            })
            .end()}
        >
          Entusiastas y profesionales del desarrollo de software se reúnen en
          <br />
          <br />
          <b style={{ textTransform: "uppercase", color: "deepskyblue" }}>
            Manos al código | Colectivo en acción
          </b>
        </Typography>
        <br />
        <br />
        <Typography
          variant="h4"
          className={fluidCSS()
            .ltX(500, {
              display: "none",
            })
            .end()}
        >
          Es gratis <i className="fa-solid fa-thumbs-up" />
        </Typography>
        <br />
        <BotonesUnirse />
      </div>
    );
  }

  function BotonesUnirse() {
    return (
      <div
        style={{
          width: "min(350px, 100%)",
          display: "flex",
          justifyContent: "space-between",
        }}
        className={fluidCSS()
          .lerpX(400, 800, {
            fontSize: [25, 30],
          })
          .end()}
      >
        <BotonUnirse
          icon={<i className="fa-brands fa-youtube" />}
          href="https://www.youtube.com/playlist?list=PLHijG0kpWet092PQS2aRaj0CFzYiDMTqF"
        >
          Podcast
        </BotonUnirse>
        <BotonUnirse
          icon={<i className="fa-brands fa-github" />}
          href="https://github.com/Jeff-Aporta/manos-al-codigo-repo"
        >
          Repositorio
        </BotonUnirse>
        <BotonUnirse
          icon={<i className="fa-brands fa-telegram" />}
          href="https://t.me/manos_al_codigo"
        >
          Grupo
        </BotonUnirse>
      </div>
    );
  }

  function BotonUnirse({ href, icon, children }) {
    return (
      <Link
        style={{
          width: "30%",
          cursor: "pointer",
          border: "1px solid rgba(70, 130, 180, 0.4)",
          padding: "10px",
          borderRadius: "10px",
        }}
        color="inherit"
        underline="none"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="backdrop-bright-hover-2"
      >
        {icon}
        <span
          style={{ fontSize: "40%", whiteSpace: "nowrap" }}
          className={fluidCSS()
            .ltX(450, {
              display: "none",
            })
            .end()}
        >
          <br />
          {children}
        </span>
      </Link>
    );
  }
}

function PaperList(props) {
  return (
    <Paper
      {...props}
      className={fluidCSS()
        .lerpX(400, 800, {
          padding: [5, 20],
        })
        .end()}
    />
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

function IndiceTemas() {
  return (
    <ol className="contador">
      <PaperBody>
        <Fundamentos />
      </PaperBody>
      <PaperBody>
        <FrontendDeveloper />
      </PaperBody>
      <PaperBody>
        <BackendDeveloper />
      </PaperBody>
    </ol>
  );

  function Fundamentos() {
    return (
      <li>
        <Typography variant="h4">Fundamentos del Desarrollo Web</Typography>
        <hr />
        <br />
        <ol>
          {HTML()}
          <br />
          {CSS()}
          <br />
          {JS()}
        </ol>
      </li>
    );

    function JS() {
      return (
        <li>
          <Typography variant="h5">JavaScript</Typography>
          <hr />
          <br />
          <ol>
            <PaperList elevation={0}>
              <li>
                Fundamentos Básicos de JavaScript
                <ol>
                  <li>
                    Sintaxis Básica
                    <ul>
                      <li>
                        ⬜ Variables: <code>var</code>, <code>let</code>,{" "}
                        <code>const</code>
                      </li>
                      <li>
                        ⬜ Tipos de datos: cadenas de texto, números, booleanos,{" "}
                        <code>null</code>, <code>undefined</code>,{" "}
                        <code>symbol</code>
                      </li>
                      <li>
                        ⬜ Operadores: aritméticos, lógicos, de comparación,
                        ternarios
                      </li>
                      <li>
                        ⬜ Estructuras de control: <code>if</code>,{" "}
                        <code>else</code>, <code>switch</code>,{" "}
                        <code>while</code>, <code>for</code>,{" "}
                        <code>for...of</code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Funciones
                    <ul>
                      <li>
                        ⬜ Declaración de funciones y expresión de funciones
                      </li>
                      <li>⬜ Parámetros y argumentos</li>
                      <li>
                        ⬜ Funciones anónimas y funciones flecha (
                        <em>arrow functions</em>)
                      </li>
                      <li>
                        ⬜ Alcance (<em>scope</em>) y cierre (<em>closures</em>)
                      </li>
                    </ul>
                  </li>
                  {/* 1.5.1.3 Estructuras de Datos */}
                  <li>
                    Estructuras de Datos
                    <ul>
                      <li>
                        ⬜ Arrays: creación, acceso, métodos comunes (push, pop,
                        shift, unshift, map, filter, reduce)
                      </li>
                      <li>⬜ Objetos: creación, acceso, y manipulación</li>
                      <li>⬜ Métodos de arrays como forEach, find, includes</li>
                    </ul>
                  </li>

                  {/* 1.5.1.4 Manipulación del DOM */}
                  <li>
                    Manipulación del DOM
                    <ul>
                      <li>
                        ⬜ Seleccionar y modificar elementos (getElementById,
                        querySelector)
                      </li>
                      <li>⬜ Cambiar texto, atributos y estilos</li>
                      <li>⬜ Crear y eliminar elementos</li>
                      <li>⬜ Event listeners básicos</li>
                    </ul>
                  </li>

                  {/* 1.5.1.5 Introducción a las Herramientas de Desarrollo */}
                  <li>
                    Introducción a las Herramientas de Desarrollo
                    <ul>
                      <li>⬜ Consola del navegador</li>
                      <li>⬜ Depuración en el navegador (breakpoints)</li>
                      <li>⬜ Uso básico de console.log</li>
                    </ul>
                  </li>

                  {/* 1.5.2 Asincronía y Funciones Avanzadas */}
                  <li>
                    Asincronía y Funciones Avanzadas
                    <ol>
                      <li>
                        Asincronía y Promesas
                        <ul>
                          <li>⬜ setTimeout y setInterval</li>
                          <li>⬜ Promesas: creación, then, catch, finally</li>
                          <li>⬜ async/await</li>
                          <li>⬜ Manejo de errores con try/catch</li>
                          <li>⬜ Promise.all y Promise.race</li>
                        </ul>
                      </li>
                      <li>
                        Manipulación Avanzada del DOM
                        <ul>
                          <li>
                            ⬜ Manipulación de clases: classList, add, remove,
                            toggle
                          </li>
                          <li>⬜ Crear eventos personalizados</li>
                          <li>⬜ Delegación de eventos</li>
                          <li>
                            ⬜ event.preventDefault() y event.stopPropagation()
                          </li>
                        </ul>
                      </li>
                      <li>
                        Desarrollo Orientado a Objetos (OOP)
                        <ul>
                          <li>⬜ Clases en JavaScript</li>
                          <li>⬜ Herencia, métodos y propiedades de clases</li>
                          <li>
                            ⬜ Encapsulamiento, polimorfismo y abstracción
                          </li>
                          <li>⬜ Uso de this, super y constructor</li>
                        </ul>
                      </li>
                    </ol>
                  </li>

                  {/* 1.5.3 API y Gestión del Estado */}
                  <li>
                    API y Gestión del Estado
                    <ol>
                      <li>
                        Manejo de API y AJAX
                        <ul>
                          <li>⬜ Uso de fetch para hacer solicitudes HTTP</li>
                          <li>⬜ Promesas con fetch</li>
                          <li>⬜ Enviar datos con POST, PUT, DELETE</li>
                          <li>⬜ Manejo de datos en formato JSON</li>
                          <li>⬜ Introducción a las API RESTful</li>
                        </ul>
                      </li>
                      <li>
                        Patrones de Diseño Comunes
                        <ul>
                          <li>⬜ Módulo</li>
                          <li>⬜ Factory</li>
                          <li>⬜ Singleton</li>
                        </ul>
                      </li>
                    </ol>
                  </li>

                  {/* 1.5.4 Herramientas y Buenas Prácticas */}
                  <li>
                    Herramientas y Buenas Prácticas
                    <ol>
                      <li>
                        Frameworks y Librerías JavaScript
                        <ul>
                          <li>
                            ⬜ Introducción a React:
                            <ul>
                              <li>⬜ Componentes</li>
                              <li>⬜ Props y estado</li>
                              <li>⬜ Hooks (useState, useEffect)</li>
                              <li>⬜ Context API</li>
                            </ul>
                          </li>
                          <li>⬜ Otras librerías populares: Vue.js, Angular</li>
                          <li>
                            ⬜ Redux: gestión del estado global en aplicaciones
                            React
                          </li>
                          <li>⬜ Vuex: gestión del estado en Vue.js</li>
                        </ul>
                      </li>
                      <li>
                        Transpilers y Herramientas de Construcción
                        <ul>
                          <li>⬜ Introducción a Babel: convertir ES6 a ES5</li>
                          <li>
                            ⬜ Webpack: empaquetado de módulos, configuración
                            básica
                          </li>
                          <li>
                            ⬜ Parcel o Vite como alternativas más sencillas
                          </li>
                          <li>
                            ⬜ ESLint y Prettier para mejorar la calidad del
                            código
                          </li>
                        </ul>
                      </li>
                      <li>
                        Pruebas
                        <ul>
                          <li>
                            ⬜ Test unitarios: uso de Jest o Mocha para escribir
                            pruebas automáticas
                          </li>
                          <li>
                            ⬜ Pruebas de integración y pruebas funcionales
                          </li>
                          <li>⬜ Testing Library para React</li>
                        </ul>
                      </li>
                      <li>
                        Optimización y Rendimiento
                        <ul>
                          <li>
                            ⬜ Técnicas de optimización: lazy loading, code
                            splitting
                          </li>
                          <li>
                            ⬜ Mejoras en el rendimiento del renderizado con
                            React (React.memo, useMemo)
                          </li>
                          <li>
                            ⬜ Herramientas para medir el rendimiento del
                            navegador
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>

                  {/* 1.5.5 Arquitectura y Gestión de Proyectos */}
                  <li>
                    Arquitectura y Gestión de Proyectos
                    <ol>
                      <li>
                        Patrones de Diseño Avanzados
                        <ul>
                          <li>⬜ MVC (Modelo-Vista-Controlador)</li>
                          <li>⬜ Observer y Publisher-Subscriber</li>
                          <li>⬜ Factory y Abstract Factory</li>
                          <li>⬜ Decorator y Adapter</li>
                        </ul>
                      </li>
                      <li>
                        Arquitectura de Aplicaciones
                        <ul>
                          <li>⬜ Microservicios y aplicaciones distribuidas</li>
                          <li>
                            ⬜ Arquitectura serverless con funciones de AWS
                            Lambda o Google Cloud Functions
                          </li>
                          <li>
                            ⬜ Diseño de APIs escalables y versionado de APIs
                          </li>
                          <li>⬜ GraphQL y cómo utilizarlo en lugar de REST</li>
                        </ul>
                      </li>
                      <li>
                        Escalabilidad y Seguridad
                        <ul>
                          <li>
                            ⬜ Patrones de arquitectura para aplicaciones
                            escalables
                          </li>
                          <li>
                            ⬜ Seguridad en el desarrollo de aplicaciones: CORS,
                            protección de datos sensibles, manejo de
                            autenticación (OAuth, JWT)
                          </li>
                          <li>
                            ⬜ Mejores prácticas para la prevención de
                            vulnerabilidades (XSS, CSRF)
                          </li>
                        </ul>
                      </li>
                      <li>
                        Liderazgo y Gestión de Proyectos
                        <ul>
                          <li>
                            ⬜ Code reviews y mentoría de otros desarrolladores
                          </li>
                          <li>
                            ⬜ Desarrollo ágil con metodologías Scrum o Kanban
                          </li>
                          <li>⬜ Gestión de equipos y estimación de tareas</li>
                          <li>⬜ Creación de documentación clara y completa</li>
                        </ul>
                      </li>
                      <li>
                        Contribuciones a la Comunidad
                        <ul>
                          <li>⬜ Contribuir a proyectos de código abierto</li>
                          <li>
                            ⬜ Participación en foros y comunidades
                            (StackOverflow, GitHub, Twitter)
                          </li>
                          <li>
                            ⬜ Publicación de artículos o tutoriales sobre
                            JavaScript
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </PaperList>
          </ol>
        </li>
      );
    }

    function CSS() {
      return (
        <li>
          <Typography variant="h5">CSS (Estilos)</Typography>
          <hr />
          <br />
          <ol>
            <PaperList elevation={0}>
              <li>
                ✅ Sintaxis de CSS: selectores, propiedades, Variables CSS y
                valores.
                <ul>
                  <li>
                    🟡 Introducción:{" "}
                    <Link
                      href="https://youtu.be/7OK045GLfLg"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                      Video (EP05)
                    </Link>
                  </li>
                  <li>
                    🟡 Variables <code>root</code>:{" "}
                    <Link
                      href="https://youtu.be/Ke2Bt7NVHyQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                      Video (EP06)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <br />
                <PaperList elevation={1}>
                  <Typography variant="h6">✅ Posicionamiento.</Typography>
                  <br />
                  <ul>
                    <li>
                      🟡 <code>position: fixed;</code>{" "}
                      <Link
                        href="https://youtu.be/VgJi2qnlT0Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                      >
                        Video (EP07)
                      </Link>
                    </li>
                    <li>
                      🟡 Corrección de ejercicio{" "}
                      <Link
                        href="https://youtu.be/JfpeoPIMst4"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                      >
                        Video (EP08)
                      </Link>
                    </li>
                    <li>
                      📝 Evaluación Realizada{" "}
                      <Link
                        href="https://youtu.be/odPsMblWKKc"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                      >
                        Video (EP09)
                      </Link>
                      {" | "}
                      <Link
                        href="https://jeff-aporta.github.io/manos-al-codigo-repo/?theme=00-css-basic&pub=trivia"
                        rel="noopener noreferrer"
                        underline="hover"
                        target="_blank"
                      >
                        <b>Quizz App</b>
                      </Link>
                    </li>
                    <li>
                      <PaperList elevation={0}>
                        <b>
                          <div className="d-flex jc-sb fw-wrap ai-center">
                            <big>
                              💪🏼 Ejercicios de position: absolute; y position:
                              relative;
                            </big>
                            <big>
                              (
                              <Link
                                href={generar_URL(
                                  {
                                    pub: "desafios-de-diseño-css",
                                  },
                                  false
                                )}
                                target="_blank"
                                underline="hover"
                              >
                                Ver todos
                              </Link>
                              )
                            </big>
                          </div>
                        </b>
                        <hr />
                        <br />
                        <div>
                          {(() => {
                            const ejercicios = [];
                            const len_ex = 15;
                            for (let i = 1; i <= len_ex; i++) {
                              ejercicios.push(<Ejercicio n={i} />);
                              if (i != len_ex) {
                                ejercicios.push(" | ");
                              }
                            }
                            return ejercicios;
                          })()}
                        </div>
                        <br />
                        <b>Videos:</b>
                        <br />
                        <br />
                        {(() =>
                          [
                            [
                              "EP10 | Propuesta",
                              "https://youtu.be/kmFAUp7SwAs?si=BURWIlLOeE1st1A5",
                            ],
                            [
                              "EP11 | Estrella tartésica | Ejercicio 4",
                              "https://youtu.be/LGjkbsE6_5I?si=BGc1tLstz0-JUqd3",
                            ],
                            [
                              "EP12 | 3 diseños | Ejercicios 3, 4 y 5",
                              "https://youtu.be/9Wyf2yQCFgQ?si=EKfljKgeteapMaMk",
                            ],
                            [
                              "EP13 | London Underground | Ejercicio 7",
                              "https://youtu.be/ZfFNVlyti_4?si=6YanFPe6HAXZDqYv",
                            ],
                            [
                              "EP14 | Instragram logo | Ejercicio 8",
                              "https://youtu.be/pymesYfmeKc?si=l3wchriFCOcObOHC",
                            ],
                            [
                              "EP15 | Yin Yang | Ejercicio 10",
                              "https://youtu.be/jm0cU4AYjSo?si=GImO51o4RWguo69S",
                            ],
                            [
                              "EP16 | Refactor 1",
                              "https://youtu.be/sZnXEjxNExE?si=d3DwRmHSeB6hP3Kt",
                            ],
                            [
                              "EP17 | Refactor 2",
                              "https://youtu.be/iBYIySkpr40?si=bwepixldsIzfFOKl",
                            ],
                          ].map(([titulo, enlace]) => (
                            <_>
                              <Link
                                href={enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                              >
                                Video - {titulo}
                              </Link>
                              <br />
                            </_>
                          )))()}
                      </PaperList>
                    </li>
                  </ul>
                </PaperList>
              </li>
              <br />

              <li>✅ Introducción a Flexbox y Grid.</li>
              <li>
                ⬜ Diseño responsivo (media queries).
                <ul>
                  <li>
                    Introducción a{" "}
                    <Link
                      href="https://jeff-aporta.github.io/fluid-css/"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                      fluidCSS.js
                    </Link>
                  </li>
                </ul>
              </li>
            </PaperList>
          </ol>
        </li>
      );

      function Ejercicio({ n }) {
        return (
          <Link
            href={generar_URL(
              {
                pub: "desafios-de-diseño-css",
                "playground-id": `ejercicio-${n}`,
              },
              false
            )}
            target="_blank"
            underline="hover"
          >
            Ejercicio {n}
          </Link>
        );
      }
    }

    function HTML() {
      return (
        <li>
          <Typography variant="h5">HTML (Estructura)</Typography>
          <hr />
          <br />
          <ol>
            <PaperList elevation={0}>
              <li>
                ✅ Conocer las etiquetas básicas: <code>html</code>,{" "}
                <code>head</code>, <code>body</code>, <code>div</code>,{" "}
                <code>span</code>.
              </li>
              <li>
                ✅ Atributos HTML <code>id</code>, <code>class</code>,{" "}
                <code>style</code> y otros.{" "}
                <Link
                  href="https://youtu.be/FSZgU1kTCN0"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Video (EP02)
                </Link>
              </li>
              <li>
                ✅ Etiquetas semánticas.{" "}
                <Link
                  href="https://youtu.be/_cpTJ8lLRFo"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Video (EP03)
                </Link>
              </li>
              <li>
                ✅ Recomendaciones de accesibilidad para motores de búsqueda y
                dev-team.
              </li>
              <li>
                📝 Evaluación Realizada{" "}
                <Link
                  href="https://youtu.be/BJW_Z9wZlz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Video (EP04)
                </Link>
              </li>
            </PaperList>
          </ol>
        </li>
      );
    }
  }
  function FrontendDeveloper() {
    return (
      <li>
        <Typography variant="h4">Desarrollo Frontend Moderno</Typography>
        <ol>
          <li>
            Git y GitHub (Software en general)
            <ul>
              <li>⬜ Conceptos básicos: repositorios, commits, ramas.</li>
              <li>
                ⬜ Uso de Git en proyectos: flujo de trabajo con{" "}
                <code>git init</code>, <code>git add</code>,{" "}
                <code>git commit</code>, <code>git push</code>,{" "}
                <code>git pull</code>.
              </li>
              <li>
                ⬜ Cómo colaborar con GitHub: pull requests, issues, forks,
                merges, y resolución de conflictos.
              </li>
            </ul>
          </li>

          <li>
            Librerías CSS
            <ul>
              <li>
                ⬜ SASS: utilización de framework para acelerar el desarrollo
                frontend.
              </li>
              <li>⬜ Animate.css: Animaciones básicas.</li>
              <li>⬜ FontAwesome.css: Iconos rápidos en web.</li>
            </ul>
          </li>

          <li>
            Base de JavaScript para Front-Engineering
            <ul>
              <li>
                ⬜ Programación asincrónica: uso de <code>async/await</code>,
                promesas, manejo de errores en asincronía.
              </li>
              <li>
                ⬜ Uso de APIs: consumo de APIs utilizando <code>fetch</code>{" "}
                para obtener y enviar datos en formato JSON.
              </li>
              <li>
                ⬜ Módulos y estructura de proyectos: dividir código en módulos,
                organización de carpetas y archivos en proyectos grandes.
              </li>
            </ul>
          </li>

          <li>
            Frameworks/Librerías de JavaScript
            <ol>
              <li>
                Introducción a React
                <ul>
                  <li>
                    ⬜ Componentes: creación de componentes funcionales y de
                    clase.
                  </li>
                  <li>
                    ⬜ Props y estado: pasando datos entre componentes con
                    props, y manejo del estado con <code>useState</code>.
                  </li>
                  <li>
                    ⬜ Hooks básicos: manejo del ciclo de vida de los
                    componentes con <code>useEffect</code>, y otros hooks como{" "}
                    <code>useContext</code> para compartir estado global.
                  </li>
                </ul>
              </li>
            </ol>
          </li>

          <li>
            Estilización con SASS
            <ul>
              <li>
                ⬜ Introducción a SASS: estructura de archivos{" "}
                <code>.scss</code>, variables, anidación de reglas y mixins.
              </li>
              <li>
                ⬜ Partials y Modularización: dividir los estilos en diferentes
                archivos para organizar mejor el código.
              </li>
              <li>
                ⬜ Funciones y Mixins: reutilización de estilos mediante mixins
                y creación de funciones personalizadas en SASS.
              </li>
              <li>
                ⬜ Funciones Avanzadas en SASS: uso de <code>@import</code>,{" "}
                <code>@extend</code>, y optimización del rendimiento con{" "}
                <code>@use</code>.
              </li>
              <li>
                ⬜ Conversión a un único <code>.css</code>
              </li>
            </ul>
          </li>

          <li>
            Gráficos y SVG
            <ul>
              <li>
                ⬜ Introducción a SVG: ¿Qué es SVG? Ventajas y cómo incrustarlo
                en React.
              </li>
              <li>
                ⬜ Manipulación de SVG: cambiar atributos de los elementos SVG
                como el color, el tamaño y la posición a través de CSS y JS.
              </li>
              <li>
                ⬜ Crear componentes SVG: crear componentes reutilizables con
                SVG, y controlarlos mediante props en React.
              </li>
              <li>
                ⬜ Animaciones en SVG: uso de CSS y JavaScript para animar
                gráficos SVG en la web.
              </li>
            </ul>
          </li>

          <li>
            Computación Gráfica 2D en React
            <ol>
              <li>
                Fundamentos de Computación Gráfica 2D
                <ol>
                  <li>
                    Conceptos básicos de computación gráfica 2D
                    <ul>
                      <li>⬜ ¿Qué es la computación gráfica 2D?</li>
                      <li>
                        ⬜ Diferencia entre gráficos rasterizados y vectoriales.
                      </li>
                      <li>
                        ⬜ Fundamentos de resolución, píxeles y espacio de
                        color.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vectores 2D
                    <ul>
                      <li>⬜ ¿Qué son los vectores?</li>
                      <li>
                        ⬜ Operaciones básicas con vectores: suma, resta,
                        multiplicación por un escalar.
                      </li>
                      <li>
                        ⬜ Vectores en el contexto de computación gráfica 2D:
                        desplazamiento, rotación y escala.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Coordenadas y Transformaciones
                    <ul>
                      <li>⬜ Sistema de coordenadas cartesianas.</li>
                      <li>
                        ⬜ Transformaciones básicas: traslación, rotación y
                        escalado.
                      </li>
                      <li>
                        ⬜ Cómo aplicar estas transformaciones a elementos
                        gráficos en React.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                Matrices en Computación Gráfica
                <ol>
                  <li>
                    Introducción a las matrices
                    <ul>
                      <li>
                        ⬜ ¿Qué es una matriz y cómo se usa en computación
                        gráfica?
                      </li>
                      <li>⬜ Matrices de transformación 2D.</li>
                      <li>
                        ⬜ Multiplicación de matrices y su relación con las
                        transformaciones.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Transformaciones con Matrices
                    <ul>
                      <li>
                        ⬜ Aplicación de transformaciones utilizando matrices:
                        rotación, traslación y escala.
                      </li>
                      <li>
                        ⬜ Composición de transformaciones: cómo combinar
                        múltiples transformaciones en una sola matriz.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Matrices en React
                    <ul>
                      <li>
                        ⬜ Cómo integrar matrices de transformación con el DOM
                        en React.
                      </li>
                      <li>
                        ⬜ Uso de <code>Array.from()</code> para la creación de
                        matrices dinámicas.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                Degradados y Rellenos
                <ol>
                  <li>
                    Degradados lineales con porcentajes
                    <ul>
                      <li>⬜ ¿Qué es un degradado lineal?</li>
                      <li>
                        ⬜ Creación de degradados horizontales y verticales
                        utilizando <code>div</code>s en React.
                      </li>
                      <li>
                        ⬜ Aplicación de ecuaciones para calcular el color en un
                        rango entre dos puntos.
                      </li>
                      <li>
                        ⬜ Fórmulas algebraicas para calcular el color en el
                        degradado (usando porcentajes de columnas y filas).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Degradados dinámicos utilizando <code>Array.from()</code>
                    <ul>
                      <li>
                        ⬜ Uso de <code>Array.from()</code> para generar un
                        arreglo de elementos <code>div</code>.
                      </li>
                      <li>
                        ⬜ Control de las filas y columnas dentro de una matriz
                        de degradados.
                      </li>
                      <li>
                        ⬜ Aplicación de variaciones de color con
                        transformaciones basadas en ecuaciones lineales.
                      </li>
                      <li>
                        ⬜ Entender los conceptos de cómo variar los colores de
                        fondo en función de las posiciones dentro de la matriz.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                Animación y Gestión de Información con Eventos en React
                <ol>
                  <li>
                    Control de eventos en React
                    <ul>
                      <li>
                        ⬜ Manejo de eventos de ratón, como{" "}
                        <code>onMouseMove</code> y <code>onMouseOver</code>,
                        para capturar la posición del cursor dentro de la
                        matriz.
                      </li>
                      <li>
                        ⬜ Uso de eventos como <code>:hover</code> para
                        interactuar con celdas de la matriz.
                      </li>
                      <li>
                        ⬜ Actualización de la posición del cursor y la
                        información correspondiente.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Estrategias de gestión de información en la matriz
                    <ul>
                      <li>
                        ⬜ Pintar celdas dentro de la matriz que cumplan con
                        ciertas reglas (por ejemplo: menor que, mayor que o
                        igual que, utilizando coordenadas de fila y columna).
                      </li>
                      <li>
                        ⬜ Actualización dinámica de celdas de la matriz con
                        base en eventos y reglas definidas.
                      </li>
                      <li>
                        ⬜ Control de los valores y colores de la matriz
                        mediante cambios de estado.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Animación utilizando <code>setTimeout</code>
                    <ul>
                      <li>
                        ⬜ Uso de <code>setTimeout</code> para crear
                        transiciones suaves entre cambios de estado en la
                        matriz.
                      </li>
                      <li>
                        ⬜ Control de tiempos y secuencias de animación de las
                        celdas en la matriz.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                Vectores en React
                <ol>
                  <li>
                    Conceptos básicos de vectores
                    <ul>
                      <li>⬜ Representación de vectores en el espacio 2D.</li>
                      <li>
                        ⬜ Operaciones con vectores en computación gráfica.
                      </li>
                      <li>
                        ⬜ Vectores unitarios y su uso para movimientos y
                        transformaciones.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vectores en React con CSS y <code>Array.from()</code>
                    <ul>
                      <li>
                        ⬜ Cómo integrar operaciones vectoriales en el espacio
                        de diseño con CSS.
                      </li>
                      <li>
                        ⬜ Creación de animaciones y desplazamientos de vectores
                        en una matriz de <code>div</code>s.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                Juegos Simples con Gráficos 2D en React
                <ol>
                  <li>
                    Introducción a la creación de juegos simples
                    <ul>
                      <li>⬜ Fundamentos de los juegos 2D en React.</li>
                      <li>
                        ⬜ Cómo gestionar estados y eventos en juegos
                        interactivos.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Desarrollo de Tetris en React
                    <ul>
                      <li>
                        ⬜ Implementación de la lógica de juego de Tetris.
                      </li>
                      <li>
                        ⬜ Gestión de las piezas y su animación dentro de la
                        matriz.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Desarrollo de Sudoku en React
                    <ul>
                      <li>
                        ⬜ Creación de la matriz de Sudoku y las reglas básicas
                        del juego.
                      </li>
                      <li>⬜ Lógica de validación y resolución del Sudoku.</li>
                    </ul>
                  </li>
                  <li>
                    Desarrollo de Juego de Memoria en React
                    <ul>
                      <li>
                        ⬜ Implementación del juego de memoria utilizando
                        matrices.
                      </li>
                      <li>
                        ⬜ Gestión de los pares de cartas y su animación con
                        React.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Desarrollo de Juego de Conway en React
                    <ul>
                      <li>
                        ⬜ Implementación del Juego de la Vida de Conway
                        utilizando React.
                      </li>
                      <li>
                        ⬜ Actualización de las celdas de la matriz en base a
                        las reglas del juego.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Desarrollo de Buscaminas en React
                    <ul>
                      <li>
                        ⬜ Lógica básica y diseño del juego de Buscaminas.
                      </li>
                      <li>
                        ⬜ Implementación de la detección de minas y eventos en
                        el juego.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    );
  }

  function BackendDeveloper() {
    return (
      <li>
        <Typography variant="h4">Desarrollo Backend</Typography>
        <ol>
          <li>
            Introducción al Backend
            <ul>
              <li>Conceptos básicos: servidores, bases de datos.</li>
              <li>Configuración de Node.js y npm.</li>
              <li>Crear un servidor básico con Express.js.</li>
            </ul>
          </li>

          <li>
            Bases de Datos
            <ul>
              <li>
                Introducción a bases de datos relacionales (SQL) y no
                relacionales (MongoDB).
              </li>
              <li>
                CRUD (Crear, Leer, Actualizar, Eliminar) con bases de datos.
              </li>
            </ul>
          </li>

          <li>
            APIs y Autenticación
            <ul>
              <li>Crear APIs RESTful.</li>
              <li>Middleware en Express.js.</li>
              <li>Autenticación con Passport-Local.</li>
            </ul>
          </li>

          <li>
            Tópicos Adicionales para Node.js
            <ul>
              <li>Uso de variables de entorno con dotenv.</li>
              <li>Encriptación y manejo de contraseñas con bcrypt.</li>
              <li>Autenticación basada en tokens (JWT).</li>
              <li>Comunicación en tiempo real con Socket.io.</li>
              <li>Manejo de archivos y Streams en Node.js.</li>
              <li>Buenas prácticas con ESLint y Prettier.</li>
              <li>Testing de endpoints con Jest o Mocha.</li>
              <li>Despliegue y ejecución en producción con PM2.</li>
            </ul>
          </li>
        </ol>
      </li>
    );
  }
}
