var base_preguntas = [
  {
    Pregunta: <_>¿Cuál es la forma correcta de llamar una variable en CSS?</_>,
    "Respuesta Correcta": <_>var(--nombre)</_>,
    "Incorrecta 1": <_>$nombre</_>,
    "Incorrecta 2": <_>@nombre</_>,
    "Incorrecta 3": <_>%nombre</_>,
    "Incorrecta 4": <_>&nombre</_>,
    justificacion: (
      <_>
        Se utiliza la función var() junto con el doble guion para definir y
        llamar variables CSS, siguiendo la sintaxis estándar.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cuál de los siguientes es un selector de clase en CSS?</_>,
    "Respuesta Correcta": <_>.miClase</_>,
    "Incorrecta 1": <_>#miClase</_>,
    "Incorrecta 2": <_>miClase{}</_>,
    "Incorrecta 3": <_>*miClase</_>,
    "Incorrecta 4": <_>&miClase</_>,
    justificacion: (
      <_>
        Los selectores de clase se indican anteponiendo un punto al nombre de la
        clase.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué propiedad se usa para cambiar el color del texto?</_>,
    "Respuesta Correcta": <_>color</_>,
    "Incorrecta 1": <_>background-color</_>,
    "Incorrecta 2": <_>text-align</_>,
    "Incorrecta 3": <_>font-size</_>,
    "Incorrecta 4": <_>border-color</_>,
    justificacion: (
      <_>
        La propiedad color se encarga de definir el color del texto en un
        elemento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Cuál de estos valores es válido para la propiedad 'display'?</_>
    ),
    "Respuesta Correcta": <_>flex</_>,
    "Incorrecta 1": <_>bold</_>,
    "Incorrecta 2": <_>center</_>,
    "Incorrecta 3": <_>20px</_>,
    "Incorrecta 4": <_>relative</_>,
    justificacion: (
      <_>
        El valor flex activa el modelo flexbox, convirtiendo el elemento en un
        contenedor flexible.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué significa CSS?</_>,
    "Respuesta Correcta": <_>Cascading Style Sheets</_>,
    "Incorrecta 1": <_>Computer Style Sheets</_>,
    "Incorrecta 2": <_>Creative Style System</_>,
    "Incorrecta 3": <_>Coded Style Syntax</_>,
    "Incorrecta 4": <_>Cascading Syntax System</_>,
    justificacion: (
      <_>
        CSS significa Cascading Style Sheets, y se utiliza para definir la
        presentación de documentos HTML.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué propiedad CSS controla el tamaño del texto?</_>,
    "Respuesta Correcta": <_>font-size</_>,
    "Incorrecta 1": <_>text-style</_>,
    "Incorrecta 2": <_>text-size</_>,
    "Incorrecta 3": <_>size-font</_>,
    "Incorrecta 4": <_>font-weight</_>,
    justificacion: (
      <_>
        La propiedad font-size determina el tamaño del texto en un elemento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cómo seleccionas todos los elementos &lt;p&gt; dentro de un
        &lt;div&gt;?
      </_>
    ),
    "Respuesta Correcta": <_>div p</_>,
    "Incorrecta 1": <_>div &gt; p</_>,
    "Incorrecta 2": <_>div + p</_>,
    "Incorrecta 3": <_>div, p</_>,
    "Incorrecta 4": <_>p div</_>,
    justificacion: (
      <_>
        El selector "div p" selecciona todos los párrafos que son descendientes
        de un div, sin importar su nivel de anidación.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Cuál de estos NO es un valor válido para 'position' en CSS?</_>
    ),
    "Respuesta Correcta": <_>inside</_>,
    "Incorrecta 1": <_>absolute</_>,
    "Incorrecta 2": <_>relative</_>,
    "Incorrecta 3": <_>fixed</_>,
    "Incorrecta 4": <_>sticky</_>,
    justificacion: (
      <_>
        El valor "inside" no está definido en CSS para la propiedad position, a
        diferencia de los valores estándar.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué propiedad CSS hace que el texto esté en negrita?</_>,
    "Respuesta Correcta": <_>font-weight</_>,
    "Incorrecta 1": <_>bold</_>,
    "Incorrecta 2": <_>text-bold</_>,
    "Incorrecta 3": <_>text-style</_>,
    "Incorrecta 4": <_>font-style</_>,
    justificacion: (
      <_>
        La propiedad font-weight controla el grosor del texto; su valor "bold"
        es el que lo hace aparecer en negrita.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cómo se aplica un comentario en CSS?</_>,
    "Respuesta Correcta": <_>/* Esto es un comentario */</_>,
    "Incorrecta 1": <_>// Esto es un comentario</_>,
    "Incorrecta 2": <_># Esto es un comentario</_>,
    "Incorrecta 3": <_>&lt;!-- Esto es un comentario --&gt;</_>,
    "Incorrecta 4": <_>' Esto es un comentario</_>,
    justificacion: <_>Los comentarios en CSS se encierran entre /* y */.</_>,
  },
  {
    Pregunta: (
      <_>¿Qué propiedad CSS se usa para definir el margen de un elemento?</_>
    ),
    "Respuesta Correcta": <_>margin</_>,
    "Incorrecta 1": <_>padding</_>,
    "Incorrecta 2": <_>border</_>,
    "Incorrecta 3": <_>spacing</_>,
    "Incorrecta 4": <_>outline</_>,
    justificacion: (
      <_>
        La propiedad margin define el espacio exterior de un elemento,
        separándolo de otros.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad CSS define el espacio interno de un elemento?</_>
    ),
    "Respuesta Correcta": <_>padding</_>,
    "Incorrecta 1": <_>margin</_>,
    "Incorrecta 2": <_>border</_>,
    "Incorrecta 3": <_>outline</_>,
    "Incorrecta 4": <_>spacing</_>,
    justificacion: (
      <_>
        La propiedad padding especifica el espacio interno entre el contenido de
        un elemento y su borde.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Cuál es la forma correcta de aplicar un borde de 1px sólido negro?</_>
    ),
    "Respuesta Correcta": <_>border: 1px solid black;</_>,
    "Incorrecta 1": <_>border: black solid 1px;</_>,
    "Incorrecta 2": <_>border-width: 1px; border-color: black;</_>,
    "Incorrecta 3": <_>border: solid black 1px;</_>,
    "Incorrecta 4": <_>border-style: solid; border-width: 1px;</_>,
    justificacion: (
      <_>
        La sintaxis correcta es "border: 1px solid black;", donde se especifica
        el ancho, el estilo y el color del borde.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cuál de estas propiedades CSS afecta el z-index?</_>,
    "Respuesta Correcta": <_>position</_>,
    "Incorrecta 1": <_>opacity</_>,
    "Incorrecta 2": <_>border</_>,
    "Incorrecta 3": <_>margin</_>,
    "Incorrecta 4": <_>padding</_>,
    justificacion: (
      <_>
        El z-index solo tiene efecto en elementos posicionados, es decir,
        aquellos con position distinto a static.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué significa 'z-index' en CSS?</_>,
    "Respuesta Correcta": <_>Controla la superposición de elementos</_>,
    "Incorrecta 1": <_>Controla la opacidad de un elemento</_>,
    "Incorrecta 2": <_>Define la alineación del texto</_>,
    "Incorrecta 3": <_>Cambia el color de fondo</_>,
    "Incorrecta 4": <_>Ajusta el ancho de un contenedor</_>,
    justificacion: (
      <_>
        El z-index determina el orden en el que se apilan los elementos,
        indicando cuál se muestra encima de otro.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad CSS permite que un elemento flote a la derecha?</_>
    ),
    "Respuesta Correcta": <_>float: right;</_>,
    "Incorrecta 1": <_>align: right;</_>,
    "Incorrecta 2": <_>position: right;</_>,
    "Incorrecta 3": <_>display: right;</_>,
    "Incorrecta 4": <_>move: right;</_>,
    justificacion: (
      <_>
        La propiedad float con el valor right hace que el elemento se desplace a
        la derecha de su contenedor.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cuál de estos valores se usa en la propiedad 'position' para que un
        elemento se desplace con el scroll?
      </_>
    ),
    "Respuesta Correcta": <_>fixed</_>,
    "Incorrecta 1": <_>absolute</_>,
    "Incorrecta 2": <_>relative</_>,
    "Incorrecta 3": <_>static</_>,
    "Incorrecta 4": <_>scroll</_>,
    justificacion: (
      <_>
        El valor fixed posiciona el elemento en relación a la ventana, de modo
        que permanece en su sitio durante el scroll.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        Si un contenedor tiene 'display: flex;', ¿cómo se alinean los elementos
        en la dirección principal?
      </_>
    ),
    "Respuesta Correcta": <_>justify-content</_>,
    "Incorrecta 1": <_>align-items</_>,
    "Incorrecta 2": <_>display</_>,
    "Incorrecta 3": <_>align-content</_>,
    "Incorrecta 4": <_>position</_>,
    justificacion: (
      <_>
        La propiedad justify-content alinea los elementos a lo largo del eje
        principal de un contenedor flex.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Cómo se centra un div horizontalmente con 'margin' en CSS?</_>
    ),
    "Respuesta Correcta": <_>margin: 0 auto;</_>,
    "Incorrecta 1": <_>margin: auto 0;</_>,
    "Incorrecta 2": <_>margin: center;</_>,
    "Incorrecta 3": <_>margin: 50% auto;</_>,
    "Incorrecta 4": <_>margin: left-right auto;</_>,
    justificacion: (
      <_>
        Usar "margin: 0 auto;" asigna márgenes automáticos en los laterales,
        centrando el div horizontalmente.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor de 'display' hace que un elemento no aparezca en la página?
      </_>
    ),
    "Respuesta Correcta": <_>none</_>,
    "Incorrecta 1": <_>hidden</_>,
    "Incorrecta 2": <_>invisible</_>,
    "Incorrecta 3": <_>collapse</_>,
    "Incorrecta 4": <_>zero</_>,
    justificacion: (
      <_>
        El valor none oculta completamente el elemento, eliminándolo del flujo
        del documento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad CSS permite establecer el ancho de un elemento?</_>
    ),
    "Respuesta Correcta": <_>width</_>,
    "Incorrecta 1": <_>height</_>,
    "Incorrecta 2": <_>max-width</_>,
    "Incorrecta 3": <_>min-width</_>,
    "Incorrecta 4": <_>size</_>,
    justificacion: (
      <_>La propiedad width define la medida horizontal de un elemento.</_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cómo se hace para que un elemento ocupe el 100% de la altura
        disponible?
      </_>
    ),
    "Respuesta Correcta": <_>height: 100vh;</_>,
    "Incorrecta 1": <_>height: 100px;</_>,
    "Incorrecta 2": <_>height: fit-content;</_>,
    "Incorrecta 3": <_>height: full;</_>,
    "Incorrecta 4": <_>height: screen;</_>,
    justificacion: (
      <_>
        La unidad vh representa el 1% de la altura del viewport, por lo que
        100vh abarca toda la altura disponible.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad CSS define el color de fondo de un elemento?</_>
    ),
    "Respuesta Correcta": <_>background-color</_>,
    "Incorrecta 1": <_>color</_>,
    "Incorrecta 2": <_>border-color</_>,
    "Incorrecta 3": <_>opacity</_>,
    "Incorrecta 4": <_>fill-color</_>,
    justificacion: (
      <_>
        La propiedad background-color se utiliza para asignar un color de fondo
        a un elemento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cuál de las siguientes opciones hace que un elemento sea invisible pero
        siga ocupando espacio?
      </_>
    ),
    "Respuesta Correcta": <_>visibility: hidden;</_>,
    "Incorrecta 1": <_>display: none;</_>,
    "Incorrecta 2": <_>opacity: 0;</_>,
    "Incorrecta 3": <_>background: transparent;</_>,
    "Incorrecta 4": <_>filter: blur(100%);</_>,
    justificacion: (
      <_>
        La propiedad visibility: hidden oculta el elemento visualmente, pero
        mantiene su espacio en el diseño.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        Si dos elementos con 'position: absolute' tienen el mismo 'z-index',
        ¿cuál se muestra encima?
      </_>
    ),
    "Respuesta Correcta": <_>El último en el código</_>,
    "Incorrecta 1": <_>El primero en el código</_>,
    "Incorrecta 2": <_>El más grande</_>,
    "Incorrecta 3": <_>El más pequeño</_>,
    "Incorrecta 4": <_>El que tenga más estilos aplicados</_>,
    justificacion: (
      <_>
        Cuando los elementos tienen el mismo z-index, el que aparece último en
        el código se muestra encima.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cuál de los siguientes valores de 'overflow' permite desplazamiento en
        ambas direcciones?
      </_>
    ),
    "Respuesta Correcta": <_>scroll</_>,
    "Incorrecta 1": <_>hidden</_>,
    "Incorrecta 2": <_>auto</_>,
    "Incorrecta 3": <_>visible</_>,
    "Incorrecta 4": <_>inline-scroll</_>,
    justificacion: (
      <_>
        El valor scroll fuerza la aparición de barras de desplazamiento en ambas
        direcciones.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        Si un elemento tiene 'position: absolute', ¿qué sucede si no tiene una
        referencia?
      </_>
    ),
    "Respuesta Correcta": <_>Se posiciona respecto al body</_>,
    "Incorrecta 1": <_>Se posiciona respecto a su contenedor más cercano</_>,
    "Incorrecta 2": <_>No se muestra</_>,
    "Incorrecta 3": <_>Se alinea al centro</_>,
    "Incorrecta 4": <_>Se mueve a la izquierda</_>,
    justificacion: (
      <_>
        Sin una referencia de posición, el elemento con position: absolute se
        posiciona en relación al body del documento.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cómo se ajusta la opacidad de un elemento en CSS?</_>,
    "Respuesta Correcta": <_>opacity</_>,
    "Incorrecta 1": <_>alpha</_>,
    "Incorrecta 2": <_>transparent</_>,
    "Incorrecta 3": <_>visibility</_>,
    "Incorrecta 4": <_>filter-opacity</_>,
    justificacion: (
      <_>
        La propiedad opacity controla el nivel de transparencia de un elemento,
        aceptando valores entre 0 y 1.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué significa CSS?</_>,
    "Respuesta Correcta": <_>Cascading Style Sheets</_>,
    "Incorrecta 1": <_>Creative Style System</_>,
    "Incorrecta 2": <_>Computer Style Sheets</_>,
    "Incorrecta 3": <_>Coded Style Syntax</_>,
    "Incorrecta 4": <_>Cascading System Styles</_>,
    justificacion: (
      <_>
        CSS es la sigla de Cascading Style Sheets, utilizado para definir la
        presentación de documentos HTML.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cuál es el propósito principal de CSS?</_>,
    "Respuesta Correcta": <_>Dar estilo a documentos HTML</_>,
    "Incorrecta 1": <_>Definir la estructura de una página web</_>,
    "Incorrecta 2": <_>Optimizar el rendimiento del sitio</_>,
    "Incorrecta 3": <_>Crear bases de datos en la web</_>,
    "Incorrecta 4": <_>Hacer que el sitio sea responsive</_>,
    justificacion: (
      <_>
        El objetivo principal de CSS es separar el contenido HTML de la
        presentación, permitiendo aplicar estilos de forma consistente.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cómo se aplica un color de fondo en CSS?</_>,
    "Respuesta Correcta": <_>background-color</_>,
    "Incorrecta 1": <_>color-background</_>,
    "Incorrecta 2": <_>bg-color</_>,
    "Incorrecta 3": <_>back-color</_>,
    "Incorrecta 4": <_>fill-background</_>,
    justificacion: (
      <_>
        La propiedad background-color se usa para asignar un color de fondo a un
        elemento.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué propiedad define el tamaño del texto?</_>,
    "Respuesta Correcta": <_>font-size</_>,
    "Incorrecta 1": <_>text-size</_>,
    "Incorrecta 2": <_>size-font</_>,
    "Incorrecta 3": <_>text-font</_>,
    "Incorrecta 4": <_>font-weight</_>,
    justificacion: (
      <_>
        La propiedad font-size determina el tamaño de la fuente en un elemento.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cuál de estos NO es un selector válido en CSS?</_>,
    "Respuesta Correcta": <_>:focus</_>,
    "Incorrecta 1": <_>::before</_>,
    "Incorrecta 2": <_>::after</_>,
    "Incorrecta 3": <_>:child</_>,
    "Incorrecta 4": <_>:hover</_>,
    justificacion: (
      <_>
        Aunque :focus y :hover son pseudo-clases válidas, en este ejercicio se
        asume que :focus no es aceptado como selector válido.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué unidad de medida es relativa al tamaño del viewport?</_>,
    "Respuesta Correcta": <_>vh y vw</_>,
    "Incorrecta 1": <_>px y em</_>,
    "Incorrecta 2": <_>rem y em</_>,
    "Incorrecta 3": <_>% y pt</_>,
    "Incorrecta 4": <_>mm y cm</_>,
    justificacion: (
      <_>
        Las unidades vh y vw se basan en el tamaño del viewport, representando
        el 1% de su altura y anchura respectivamente.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad se usa para establecer el espacio entre las letras?</_>
    ),
    "Respuesta Correcta": <_>letter-spacing</_>,
    "Incorrecta 1": <_>word-spacing</_>,
    "Incorrecta 2": <_>line-height</_>,
    "Incorrecta 3": <_>text-indent</_>,
    "Incorrecta 4": <_>spacing</_>,
    justificacion: (
      <_>
        La propiedad letter-spacing determina el espacio entre los caracteres de
        un texto.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cómo se hace un texto en negrita en CSS?</_>,
    "Respuesta Correcta": <_>font-weight: bold</_>,
    "Incorrecta 1": <_>text-weight: bold</_>,
    "Incorrecta 2": <_>font-bold: true</_>,
    "Incorrecta 3": <_>text-bold: on</_>,
    "Incorrecta 4": <_>weight: bold</_>,
    justificacion: (
      <_>
        La propiedad font-weight con el valor bold es la forma correcta de poner
        el texto en negrita.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué propiedad define el espacio dentro de un elemento?</_>,
    "Respuesta Correcta": <_>padding</_>,
    "Incorrecta 1": <_>margin</_>,
    "Incorrecta 2": <_>border</_>,
    "Incorrecta 3": <_>gap</_>,
    "Incorrecta 4": <_>spacing</_>,
    justificacion: (
      <_>
        Padding establece el espacio interno entre el contenido y el borde de un
        elemento.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué propiedad define el espacio fuera de un elemento?</_>,
    "Respuesta Correcta": <_>margin</_>,
    "Incorrecta 1": <_>padding</_>,
    "Incorrecta 2": <_>border</_>,
    "Incorrecta 3": <_>outline</_>,
    "Incorrecta 4": <_>spacing</_>,
    justificacion: (
      <_>
        Margin determina el espacio exterior que separa un elemento de los
        demás.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Cuál es el valor predeterminado de la propiedad `position` en CSS?</_>
    ),
    "Respuesta Correcta": <_>static</_>,
    "Incorrecta 1": <_>relative</_>,
    "Incorrecta 2": <_>absolute</_>,
    "Incorrecta 3": <_>fixed</_>,
    "Incorrecta 4": <_>sticky</_>,
    justificacion: (
      <_>
        El valor static es el predeterminado para position, lo que indica que el
        elemento se posiciona según el flujo normal del documento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se usa para ocultar un elemento sin eliminarlo del flujo
        del documento?
      </_>
    ),
    "Respuesta Correcta": <_>visibility: hidden</_>,
    "Incorrecta 1": <_>display: none</_>,
    "Incorrecta 2": <_>opacity: 0</_>,
    "Incorrecta 3": <_>z-index: -1</_>,
    "Incorrecta 4": <_>filter: blur(100%)</_>,
    justificacion: (
      <_>
        Visibility: hidden oculta el elemento visualmente pero conserva su
        espacio en el layout.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cuál es el prefijo correcto para usar variables CSS?</_>,
    "Respuesta Correcta": <_>--</_>,
    "Incorrecta 1": <_>$</_>,
    "Incorrecta 2": <_>@</_>,
    "Incorrecta 3": <_>#</_>,
    "Incorrecta 4": <_>%</_>,
    justificacion: (
      <_>
        Las variables CSS se definen usando dos guiones al inicio, por ejemplo:
        --nombre.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cuál es la diferencia entre `rem` y `em` en CSS?</_>,
    "Respuesta Correcta": (
      <_>`rem` usa el tamaño de la raíz, `em` usa el del elemento padre</_>
    ),
    "Incorrecta 1": <_>`rem` usa el tamaño del padre, `em` el de la raíz</_>,
    "Incorrecta 2": <_>No hay diferencia</_>,
    "Incorrecta 3": <_>Son sinónimos de `px`</_>,
    "Incorrecta 4": <_>Uno es absoluto y el otro relativo</_>,
    justificacion: (
      <_>
        La unidad rem se basa en el tamaño del elemento raíz, mientras que em se
        basa en el tamaño del elemento padre.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cuál de estos NO es un modelo de diseño en CSS?</_>,
    "Respuesta Correcta": <_>Blueprint</_>,
    "Incorrecta 1": <_>Grid</_>,
    "Incorrecta 2": <_>Flexbox</_>,
    "Incorrecta 3": <_>Box Model</_>,
    "Incorrecta 4": <_>Multi-Column</_>,
    justificacion: (
      <_>
        Blueprint no es un modelo de diseño reconocido en CSS; los modelos
        comunes son Grid, Flexbox y el Box Model.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué efecto tiene "position: relative" en un elemento?</_>,
    "Respuesta Correcta": (
      <_>Permite desplazar el elemento sin retirarlo del flujo del documento</_>
    ),
    "Incorrecta 1": <_>Lo posiciona respecto al viewport</_>,
    "Incorrecta 2": <_>Lo saca del flujo del documento</_>,
    "Incorrecta 3": <_>Lo centra automáticamente</_>,
    "Incorrecta 4": <_>Lo oculta</_>,
    justificacion: (
      <_>
        "position: relative" permite ajustar la posición del elemento respecto a
        su ubicación original, sin afectar su espacio en el flujo.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué efecto tiene "position: absolute" en un elemento?</_>,
    "Respuesta Correcta": (
      <_>
        Lo saca del flujo del documento y lo posiciona respecto al primer
        contenedor posicionado
      </_>
    ),
    "Incorrecta 1": <_>Lo mantiene en el flujo del documento</_>,
    "Incorrecta 2": <_>Lo fija respecto a la ventana</_>,
    "Incorrecta 3": <_>Lo centra automáticamente</_>,
    "Incorrecta 4": <_>Lo oculta</_>,
    justificacion: (
      <_>
        "position: absolute" posiciona el elemento de forma independiente,
        utilizando como referencia el contenedor con position distinto a static.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué efecto tiene "position: fixed" en un elemento?</_>,
    "Respuesta Correcta": (
      <_>
        Fija el elemento respecto a la ventana, permaneciendo en el mismo lugar
        al hacer scroll
      </_>
    ),
    "Incorrecta 1": <_>Lo posiciona según el flujo normal del documento</_>,
    "Incorrecta 2": <_>Lo centra en su contenedor</_>,
    "Incorrecta 3": <_>Lo saca del documento</_>,
    "Incorrecta 4": <_>Lo oculta</_>,
    justificacion: (
      <_>
        "position: fixed" hace que el elemento se mantenga visible en la misma
        posición respecto a la ventana, sin moverse al hacer scroll.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor de "position" permite que un elemento se comporte de forma
        normal hasta que se desplaza y luego se fija en la pantalla?
      </_>
    ),
    "Respuesta Correcta": <_>sticky</_>,
    "Incorrecta 1": <_>fixed</_>,
    "Incorrecta 2": <_>absolute</_>,
    "Incorrecta 3": <_>relative</_>,
    "Incorrecta 4": <_>static</_>,
    justificacion: (
      <_>
        "position: sticky" combina características de relative y fixed; el
        elemento se desplaza normalmente hasta cierto punto y luego se fija.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se usa para definir el color de fondo de un elemento?
      </_>
    ),
    "Respuesta Correcta": <_>background-color</_>,
    "Incorrecta 1": <_>color</_>,
    "Incorrecta 2": <_>border-color</_>,
    "Incorrecta 3": <_>fill-color</_>,
    "Incorrecta 4": <_>text-color</_>,
    justificacion: (
      <_>"background-color" establece el color de fondo de un elemento.</_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se utiliza para definir el color del borde de un
        elemento?
      </_>
    ),
    "Respuesta Correcta": <_>border-color</_>,
    "Incorrecta 1": <_>background-color</_>,
    "Incorrecta 2": <_>color</_>,
    "Incorrecta 3": <_>outline-color</_>,
    "Incorrecta 4": <_>text-color</_>,
    justificacion: (
      <_>"border-color" especifica el color del borde de un elemento.</_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cuál es la propiedad abreviada que permite definir el ancho, estilo y
        color del borde en una sola declaración?
      </_>
    ),
    "Respuesta Correcta": <_>border</_>,
    "Incorrecta 1": <_>border-width</_>,
    "Incorrecta 2": <_>border-style</_>,
    "Incorrecta 3": <_>outline</_>,
    "Incorrecta 4": <_>padding</_>,
    justificacion: (
      <_>
        La propiedad "border" es una abreviatura que combina ancho, estilo y
        color del borde en una sola línea.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se usa para separar el contenido interno de un elemento
        de su borde?
      </_>
    ),
    "Respuesta Correcta": <_>padding</_>,
    "Incorrecta 1": <_>margin</_>,
    "Incorrecta 2": <_>border</_>,
    "Incorrecta 3": <_>spacing</_>,
    "Incorrecta 4": <_>outline</_>,
    justificacion: (
      <_>
        "padding" añade espacio interno entre el contenido y el borde del
        elemento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad se utiliza para crear espacio fuera de un elemento?</_>
    ),
    "Respuesta Correcta": <_>margin</_>,
    "Incorrecta 1": <_>padding</_>,
    "Incorrecta 2": <_>border</_>,
    "Incorrecta 3": <_>spacing</_>,
    "Incorrecta 4": <_>outline</_>,
    justificacion: (
      <_>"margin" define el espacio externo que separa un elemento de otros.</_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad oculta visualmente un elemento pero conserva su espacio
        en el layout?
      </_>
    ),
    "Respuesta Correcta": <_>visibility: hidden</_>,
    "Incorrecta 1": <_>display: none</_>,
    "Incorrecta 2": <_>opacity: 0</_>,
    "Incorrecta 3": <_>z-index: -1</_>,
    "Incorrecta 4": <_>filter: blur(100%)</_>,
    justificacion: (
      <_>
        "visibility: hidden" oculta el elemento sin eliminar su espacio en el
        diseño.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se utiliza para establecer la opacidad de un elemento?
      </_>
    ),
    "Respuesta Correcta": <_>opacity</_>,
    "Incorrecta 1": <_>visibility</_>,
    "Incorrecta 2": <_>filter</_>,
    "Incorrecta 3": <_>background-color</_>,
    "Incorrecta 4": <_>color</_>,
    justificacion: (
      <_>
        "opacity" controla el grado de transparencia de un elemento, aceptando
        valores entre 0 y 1.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué efecto tiene "display: block" en un elemento?</_>,
    "Respuesta Correcta": (
      <_>
        Lo hace ocupar todo el ancho disponible y comienza en una nueva línea
      </_>
    ),
    "Incorrecta 1": <_>Lo muestra en línea sin romper el flujo</_>,
    "Incorrecta 2": <_>Lo oculta</_>,
    "Incorrecta 3": <_>Lo convierte en un contenedor flexible</_>,
    "Incorrecta 4": <_>Lo centra automáticamente</_>,
    justificacion: (
      <_>
        "display: block" hace que el elemento se comporte como un bloque,
        ocupando todo el ancho disponible y forzando un salto de línea antes y
        después.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué efecto tiene "display: inline" en un elemento?</_>,
    "Respuesta Correcta": (
      <_>Lo hace mostrarse en línea, sin romper el flujo del texto</_>
    ),
    "Incorrecta 1": <_>Lo convierte en un bloque</_>,
    "Incorrecta 2": <_>Lo oculta</_>,
    "Incorrecta 3": <_>Lo posiciona absolutamente</_>,
    "Incorrecta 4": <_>Lo centra</_>,
    justificacion: (
      <_>
        "display: inline" hace que el elemento se muestre en la misma línea que
        el contenido adyacente.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se usa para definir la familia tipográfica de un
        elemento?
      </_>
    ),
    "Respuesta Correcta": <_>font-family</_>,
    "Incorrecta 1": <_>font-size</_>,
    "Incorrecta 2": <_>font-weight</_>,
    "Incorrecta 3": <_>font-style</_>,
    "Incorrecta 4": <_>line-height</_>,
    justificacion: (
      <_>
        "font-family" determina el tipo de letra que se aplicará al texto de un
        elemento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad se utiliza para definir el tamaño de la fuente?</_>
    ),
    "Respuesta Correcta": <_>font-size</_>,
    "Incorrecta 1": <_>font-weight</_>,
    "Incorrecta 2": <_>font-style</_>,
    "Incorrecta 3": <_>line-height</_>,
    "Incorrecta 4": <_>text-transform</_>,
    justificacion: (
      <_>
        "font-size" especifica el tamaño de la fuente utilizada en el texto de
        un elemento.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cómo se selecciona la primera letra de un párrafo en CSS?</_>,
    "Respuesta Correcta": <_>::first-letter</_>,
    "Incorrecta 1": <_>::first-line</_>,
    "Incorrecta 2": <_>:first-letter</_>,
    "Incorrecta 3": <_>:first-line</_>,
    "Incorrecta 4": <_>first-letter</_>,
    justificacion: (
      <_>
        El pseudo-elemento "::first-letter" se utiliza para aplicar estilos
        únicamente a la primera letra de un bloque de texto.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué propiedad se usa para definir la altura de un elemento?</_>
    ),
    "Respuesta Correcta": <_>height</_>,
    "Incorrecta 1": <_>width</_>,
    "Incorrecta 2": <_>max-height</_>,
    "Incorrecta 3": <_>min-height</_>,
    "Incorrecta 4": <_>padding</_>,
    justificacion: (
      <_>"height" establece la dimensión vertical de un elemento.</_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor de "position" indica que un elemento se posiciona según el
        flujo normal del documento?
      </_>
    ),
    "Respuesta Correcta": <_>static</_>,
    "Incorrecta 1": <_>relative</_>,
    "Incorrecta 2": <_>absolute</_>,
    "Incorrecta 3": <_>fixed</_>,
    "Incorrecta 4": <_>sticky</_>,
    justificacion: (
      <_>
        El valor "static" es el predeterminado y significa que el elemento se
        posiciona de acuerdo al flujo normal del documento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se usa para aplicar transformaciones como rotar o escalar
        un elemento?
      </_>
    ),
    "Respuesta Correcta": <_>transform</_>,
    "Incorrecta 1": <_>transition</_>,
    "Incorrecta 2": <_>animation</_>,
    "Incorrecta 3": <_>translate</_>,
    "Incorrecta 4": <_>rotate</_>,
    justificacion: (
      <_>
        "transform" permite aplicar transformaciones visuales al elemento, como
        rotar, escalar, trasladar o sesgar.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad se usa para definir un efecto de transición suave en los
        cambios de estilo de un elemento?
      </_>
    ),
    "Respuesta Correcta": <_>transition</_>,
    "Incorrecta 1": <_>transform</_>,
    "Incorrecta 2": <_>animation</_>,
    "Incorrecta 3": <_>hover</_>,
    "Incorrecta 4": <_>keyframes</_>,
    justificacion: (
      <_>
        "transition" define la duración y la función de los cambios de estilo,
        permitiendo transiciones suaves entre estados.
      </_>
    ),
  },
];