const base_preguntas = [
    {
        "Pregunta": "¿Cómo seleccionas todos los elementos <p> dentro de un <div>?",
        "Respuesta Correcta": "div p",
        "Incorrecta 1": "div > p",
        "Incorrecta 2": "div + p",
        "Incorrecta 3": "div, p",
        "Incorrecta 4": "p div"
    },
    {
        "Pregunta": "¿Cuál es la forma correcta de llamar una variable en CSS?",
        "Respuesta Correcta": "var(--nombre)",
        "Incorrecta 1": "$nombre",
        "Incorrecta 2": "@nombre",
        "Incorrecta 3": "%nombre",
        "Incorrecta 4": "&nombre"
    },
    {
        "Pregunta": "¿Cuál de los siguientes es un selector de clase en CSS?",
        "Respuesta Correcta": ".miClase",
        "Incorrecta 1": "#miClase",
        "Incorrecta 2": "miClase{}",
        "Incorrecta 3": "*miClase",
        "Incorrecta 4": "&miClase"
    },
    {
        "Pregunta": "¿Qué propiedad se usa para cambiar el color del texto?",
        "Respuesta Correcta": "color",
        "Incorrecta 1": "background-color",
        "Incorrecta 2": "text-align",
        "Incorrecta 3": "font-size",
        "Incorrecta 4": "border-color"
    },
    {
        "Pregunta": "¿Cuál de estos valores es válido para la propiedad 'display'?",
        "Respuesta Correcta": "flex",
        "Incorrecta 1": "bold",
        "Incorrecta 2": "center",
        "Incorrecta 3": "20px",
        "Incorrecta 4": "relative"
    },
    {
        "Pregunta": "¿Qué significa CSS?",
        "Respuesta Correcta": "Cascading Style Sheets",
        "Incorrecta 1": "Computer Style Sheets",
        "Incorrecta 2": "Creative Style System",
        "Incorrecta 3": "Coded Style Syntax",
        "Incorrecta 4": "Cascading Syntax System"
    },
    {
        "Pregunta": "¿Qué propiedad CSS controla el tamaño del texto?",
        "Respuesta Correcta": "font-size",
        "Incorrecta 1": "text-style",
        "Incorrecta 2": "text-size",
        "Incorrecta 3": "size-font",
        "Incorrecta 4": "font-weight"
    },
    
    {
        "Pregunta": "¿Cuál de estos NO es un valor válido para 'position' en CSS?",
        "Respuesta Correcta": "inside",
        "Incorrecta 1": "absolute",
        "Incorrecta 2": "relative",
        "Incorrecta 3": "fixed",
        "Incorrecta 4": "sticky"
    },
    {
        "Pregunta": "¿Qué propiedad CSS hace que el texto esté en negrita?",
        "Respuesta Correcta": "font-weight",
        "Incorrecta 1": "bold",
        "Incorrecta 2": "text-bold",
        "Incorrecta 3": "text-style",
        "Incorrecta 4": "font-style"
    },
    {
        "Pregunta": "¿Cómo se aplica un comentario en CSS?",
        "Respuesta Correcta": "\/* Esto es un comentario *\/",
        "Incorrecta 1": "\/\/ Esto es un comentario",
        "Incorrecta 2": "# Esto es un comentario",
        "Incorrecta 3": "<!-- Esto es un comentario -->",
        "Incorrecta 4": "' Esto es un comentario"
    },
    {
        "Pregunta": "¿Qué propiedad CSS se usa para definir el margen de un elemento?",
        "Respuesta Correcta": "margin",
        "Incorrecta 1": "padding",
        "Incorrecta 2": "border",
        "Incorrecta 3": "spacing",
        "Incorrecta 4": "outline"
    },
    {
        "Pregunta": "¿Qué propiedad CSS define el espacio interno de un elemento?",
        "Respuesta Correcta": "padding",
        "Incorrecta 1": "margin",
        "Incorrecta 2": "border",
        "Incorrecta 3": "outline",
        "Incorrecta 4": "spacing"
    },
    {
        "Pregunta": "¿Cuál es la forma correcta de aplicar un borde de 1px sólido negro?",
        "Respuesta Correcta": "border: 1px solid black;",
        "Incorrecta 1": "border: black solid 1px;",
        "Incorrecta 2": "border-width: 1px; border-color: black;",
        "Incorrecta 3": "border: solid black 1px;",
        "Incorrecta 4": "border-style: solid; border-width: 1px;"
    },
    {
        "Pregunta": "¿Cuál de estas propiedades CSS afecta el z-index?",
        "Respuesta Correcta": "position",
        "Incorrecta 1": "opacity",
        "Incorrecta 2": "border",
        "Incorrecta 3": "margin",
        "Incorrecta 4": "padding"
    },
    {
        "Pregunta": "¿Qué significa 'z-index' en CSS?",
        "Respuesta Correcta": "Controla la superposición de elementos",
        "Incorrecta 1": "Controla la opacidad de un elemento",
        "Incorrecta 2": "Define la alineación del texto",
        "Incorrecta 3": "Cambia el color de fondo",
        "Incorrecta 4": "Ajusta el ancho de un contenedor"
    },
    {
        "Pregunta": "¿Qué propiedad CSS permite que un elemento flote a la derecha?",
        "Respuesta Correcta": "float: right;",
        "Incorrecta 1": "align: right;",
        "Incorrecta 2": "position: right;",
        "Incorrecta 3": "display: right;",
        "Incorrecta 4": "move: right;"
    },
    {
        "Pregunta": "¿Cuál de estos valores se usa en la propiedad 'position' para que un elemento se desplace con el scroll?",
        "Respuesta Correcta": "fixed",
        "Incorrecta 1": "absolute",
        "Incorrecta 2": "relative",
        "Incorrecta 3": "static",
        "Incorrecta 4": "scroll"
    },
    {
        "Pregunta": "Si un contenedor tiene 'display: flex;', ¿cómo se alinean los elementos en la dirección principal?",
        "Respuesta Correcta": "justify-content",
        "Incorrecta 1": "align-items",
        "Incorrecta 2": "display",
        "Incorrecta 3": "align-content",
        "Incorrecta 4": "position"
    },
    {
        "Pregunta": "¿Cómo se centra un div horizontalmente con 'margin' en CSS?",
        "Respuesta Correcta": "margin: 0 auto;",
        "Incorrecta 1": "margin: auto 0;",
        "Incorrecta 2": "margin: center;",
        "Incorrecta 3": "margin: 50% auto;",
        "Incorrecta 4": "margin: left-right auto;"
    },
    {
        "Pregunta": "¿Qué valor de 'display' hace que un elemento no aparezca en la página?",
        "Respuesta Correcta": "none",
        "Incorrecta 1": "hidden",
        "Incorrecta 2": "invisible",
        "Incorrecta 3": "collapse",
        "Incorrecta 4": "zero"
    },
    {
        "Pregunta": "¿Qué propiedad CSS permite establecer el ancho de un elemento?",
        "Respuesta Correcta": "width",
        "Incorrecta 1": "height",
        "Incorrecta 2": "max-width",
        "Incorrecta 3": "min-width",
        "Incorrecta 4": "size"
    },
    {
        "Pregunta": "¿Cómo se hace para que un elemento ocupe el 100% de la altura disponible?",
        "Respuesta Correcta": "height: 100vh;",
        "Incorrecta 1": "height: 100px;",
        "Incorrecta 2": "height: fit-content;",
        "Incorrecta 3": "height: full;",
        "Incorrecta 4": "height: screen;"
    },
    {
        "Pregunta": "¿Qué propiedad CSS define el color de fondo de un elemento?",
        "Respuesta Correcta": "background-color",
        "Incorrecta 1": "color",
        "Incorrecta 2": "border-color",
        "Incorrecta 3": "opacity",
        "Incorrecta 4": "fill-color"
    },
    {
        "Pregunta": "¿Cuál de las siguientes opciones hace que un elemento sea invisible pero siga ocupando espacio?",
        "Respuesta Correcta": "visibility: hidden;",
        "Incorrecta 1": "display: none;",
        "Incorrecta 2": "opacity: 0;",
        "Incorrecta 3": "background: transparent;",
        "Incorrecta 4": "filter: blur(100%);"
    },
    {
        "Pregunta": "Si dos elementos con 'position: absolute' tienen el mismo 'z-index', ¿cuál se muestra encima?",
        "Respuesta Correcta": "El último en el código",
        "Incorrecta 1": "El primero en el código",
        "Incorrecta 2": "El más grande",
        "Incorrecta 3": "El más pequeño",
        "Incorrecta 4": "El que tenga más estilos aplicados"
    },
    {
        "Pregunta": "¿Cuál de los siguientes valores de 'overflow' permite desplazamiento en ambas direcciones?",
        "Respuesta Correcta": "scroll",
        "Incorrecta 1": "hidden",
        "Incorrecta 2": "auto",
        "Incorrecta 3": "visible",
        "Incorrecta 4": "inline-scroll"
    },
    {
        "Pregunta": "Si un elemento tiene 'position: absolute', ¿qué sucede si no tiene una referencia?",
        "Respuesta Correcta": "Se posiciona respecto al body",
        "Incorrecta 1": "Se posiciona respecto a su contenedor más cercano",
        "Incorrecta 2": "No se muestra",
        "Incorrecta 3": "Se alinea al centro",
        "Incorrecta 4": "Se mueve a la izquierda"
    },
    {
        "Pregunta": "¿Cómo se ajusta la opacidad de un elemento en CSS?",
        "Respuesta Correcta": "opacity",
        "Incorrecta 1": "alpha",
        "Incorrecta 2": "transparent",
        "Incorrecta 3": "visibility",
        "Incorrecta 4": "filter-opacity"
    },
    {
        "Pregunta": "¿Qué significa CSS?",
        "Respuesta Correcta": "Cascading Style Sheets",
        "Incorrecta 1": "Creative Style System",
        "Incorrecta 2": "Computer Style Sheets",
        "Incorrecta 3": "Coded Style Syntax",
        "Incorrecta 4": "Cascading System Styles"
    },
    {
        "Pregunta": "¿Cuál es el propósito principal de CSS?",
        "Respuesta Correcta": "Dar estilo a documentos HTML",
        "Incorrecta 1": "Definir la estructura de una página web",
        "Incorrecta 2": "Optimizar el rendimiento del sitio",
        "Incorrecta 3": "Crear bases de datos en la web",
        "Incorrecta 4": "Hacer que el sitio sea responsive"
    },
    {
        "Pregunta": "¿Cómo se aplica un color de fondo en CSS?",
        "Respuesta Correcta": "background-color",
        "Incorrecta 1": "color-background",
        "Incorrecta 2": "bg-color",
        "Incorrecta 3": "back-color",
        "Incorrecta 4": "fill-background"
    },
    {
        "Pregunta": "¿Qué propiedad define el tamaño del texto?",
        "Respuesta Correcta": "font-size",
        "Incorrecta 1": "text-size",
        "Incorrecta 2": "size-font",
        "Incorrecta 3": "text-font",
        "Incorrecta 4": "font-weight"
    },
    {
        "Pregunta": "¿Cuál de estos NO es un selector válido en CSS?",
        "Respuesta Correcta": ":focus",
        "Incorrecta 1": "::before",
        "Incorrecta 2": "::after",
        "Incorrecta 3": ":child",
        "Incorrecta 4": ":hover"
    },
    {
        "Pregunta": "¿Qué unidad de medida es relativa al tamaño del viewport?",
        "Respuesta Correcta": "vh y vw",
        "Incorrecta 1": "px y em",
        "Incorrecta 2": "rem y em",
        "Incorrecta 3": "% y pt",
        "Incorrecta 4": "mm y cm"
    },
    {
        "Pregunta": "¿Qué propiedad se usa para establecer el espacio entre las letras?",
        "Respuesta Correcta": "letter-spacing",
        "Incorrecta 1": "word-spacing",
        "Incorrecta 2": "line-height",
        "Incorrecta 3": "text-indent",
        "Incorrecta 4": "spacing"
    },
    {
        "Pregunta": "¿Cómo se hace un texto en negrita en CSS?",
        "Respuesta Correcta": "font-weight: bold",
        "Incorrecta 1": "text-weight: bold",
        "Incorrecta 2": "font-bold: true",
        "Incorrecta 3": "text-bold: on",
        "Incorrecta 4": "weight: bold"
    },
    {
        "Pregunta": "¿Qué propiedad define el espacio dentro de un elemento?",
        "Respuesta Correcta": "padding",
        "Incorrecta 1": "margin",
        "Incorrecta 2": "border",
        "Incorrecta 3": "gap",
        "Incorrecta 4": "spacing"
    },
    {
        "Pregunta": "¿Qué propiedad define el espacio fuera de un elemento?",
        "Respuesta Correcta": "margin",
        "Incorrecta 1": "padding",
        "Incorrecta 2": "border",
        "Incorrecta 3": "outline",
        "Incorrecta 4": "spacing"
    },
    {
        "Pregunta": "¿Cuál es el valor predeterminado de la propiedad `position` en CSS?",
        "Respuesta Correcta": "static",
        "Incorrecta 1": "relative",
        "Incorrecta 2": "absolute",
        "Incorrecta 3": "fixed",
        "Incorrecta 4": "sticky"
    },
    {
        "Pregunta": "¿Qué propiedad se usa para ocultar un elemento sin eliminarlo del flujo del documento?",
        "Respuesta Correcta": "visibility: hidden",
        "Incorrecta 1": "display: none",
        "Incorrecta 2": "opacity: 0",
        "Incorrecta 3": "z-index: -1",
        "Incorrecta 4": "filter: blur(100%)"
    },
    {
        "Pregunta": "¿Cuál es el prefijo correcto para usar variables CSS?",
        "Respuesta Correcta": "--",
        "Incorrecta 1": "$",
        "Incorrecta 2": "@",
        "Incorrecta 3": "#",
        "Incorrecta 4": "%"
    },
    {
        "Pregunta": "¿Cuál es la diferencia entre `rem` y `em` en CSS?",
        "Respuesta Correcta": "`rem` usa el tamaño de la raíz, `em` usa el del elemento padre",
        "Incorrecta 1": "`rem` usa el tamaño del padre, `em` el de la raíz",
        "Incorrecta 2": "No hay diferencia",
        "Incorrecta 3": "Son sinónimos de `px`",
        "Incorrecta 4": "Uno es absoluto y el otro relativo"
    },
    {
        "Pregunta": "¿Cuál de estos NO es un modelo de diseño en CSS?",
        "Respuesta Correcta": "Blueprint",
        "Incorrecta 1": "Grid",
        "Incorrecta 2": "Flexbox",
        "Incorrecta 3": "Box Model",
        "Incorrecta 4": "Multi-Column"
    }
]