var base_preguntas = [
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para definir el tipo de posicionamiento de
        un elemento?
      </_>
    ),
    "Respuesta Correcta": <_>position</_>,
    "Incorrecta 1": <_>display</_>,
    "Incorrecta 2": <_>float</_>,
    "Incorrecta 3": <_>margin</_>,
    "Incorrecta 4": <_>padding</_>,
    justificacion: (
      <_>
        La propiedad 'position' determina cómo se posiciona un elemento en la
        página, permitiendo establecer valores como relative, absolute, fixed,
        entre otros.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Cuál es el valor por defecto de la propiedad position en CSS?</_>
    ),
    "Respuesta Correcta": <_>static</_>,
    "Incorrecta 1": <_>relative</_>,
    "Incorrecta 2": <_>absolute</_>,
    "Incorrecta 3": <_>fixed</_>,
    "Incorrecta 4": <_>sticky</_>,
    justificacion: (
      <_>
        El valor por defecto es 'static', lo que significa que el elemento se
        posiciona según el flujo normal del documento sin modificaciones.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor de la propiedad position posiciona un elemento de forma
        relativa a su posición original?
      </_>
    ),
    "Respuesta Correcta": <_>relative</_>,
    "Incorrecta 1": <_>absolute</_>,
    "Incorrecta 2": <_>fixed</_>,
    "Incorrecta 3": <_>static</_>,
    "Incorrecta 4": <_>inherit</_>,
    justificacion: (
      <_>
        El valor 'relative' permite desplazar el elemento desde su posición
        original sin quitarlo del flujo normal del documento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor de la propiedad position posiciona un elemento de forma
        absoluta respecto a su contenedor posicionado?
      </_>
    ),
    "Respuesta Correcta": <_>absolute</_>,
    "Incorrecta 1": <_>relative</_>,
    "Incorrecta 2": <_>fixed</_>,
    "Incorrecta 3": <_>static</_>,
    "Incorrecta 4": <_>inherit</_>,
    justificacion: (
      <_>
        El valor 'absolute' posiciona el elemento en relación al primer
        contenedor con posición distinta a static, sacándolo del flujo normal.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor de la propiedad position posiciona un elemento de forma fija
        respecto a la ventana del navegador?
      </_>
    ),
    "Respuesta Correcta": <_>fixed</_>,
    "Incorrecta 1": <_>absolute</_>,
    "Incorrecta 2": <_>relative</_>,
    "Incorrecta 3": <_>static</_>,
    "Incorrecta 4": <_>sticky</_>,
    justificacion: (
      <_>
        El valor 'fixed' posiciona el elemento en relación a la ventana del
        navegador, manteniéndolo fijo al hacer scroll.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para desplazar un elemento desde el borde
        izquierdo de su contenedor?
      </_>
    ),
    "Respuesta Correcta": <_>left</_>,
    "Incorrecta 1": <_>margin-left</_>,
    "Incorrecta 2": <_>padding-left</_>,
    "Incorrecta 3": <_>offset-left</_>,
    "Incorrecta 4": <_>inset</_>,
    justificacion: (
      <_>
        La propiedad 'left' define la distancia desde el borde izquierdo del
        contenedor, permitiendo desplazar el elemento horizontalmente.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para desplazar un elemento desde el borde
        derecho?
      </_>
    ),
    "Respuesta Correcta": <_>right</_>,
    "Incorrecta 1": <_>margin-right</_>,
    "Incorrecta 2": <_>padding-right</_>,
    "Incorrecta 3": <_>offset-right</_>,
    "Incorrecta 4": <_>inset</_>,
    justificacion: (
      <_>
        La propiedad 'right' establece la distancia entre el elemento y el borde
        derecho del contenedor.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para desplazar un elemento desde el borde
        superior?
      </_>
    ),
    "Respuesta Correcta": <_>top</_>,
    "Incorrecta 1": <_>margin-top</_>,
    "Incorrecta 2": <_>padding-top</_>,
    "Incorrecta 3": <_>offset-top</_>,
    "Incorrecta 4": <_>inset</_>,
    justificacion: (
      <_>
        La propiedad 'top' determina la distancia desde el borde superior del
        contenedor hasta el elemento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para desplazar un elemento desde el borde
        inferior?
      </_>
    ),
    "Respuesta Correcta": <_>bottom</_>,
    "Incorrecta 1": <_>margin-bottom</_>,
    "Incorrecta 2": <_>padding-bottom</_>,
    "Incorrecta 3": <_>offset-bottom</_>,
    "Incorrecta 4": <_>inset</_>,
    justificacion: (
      <_>
        La propiedad 'bottom' especifica la distancia desde el borde inferior
        del contenedor al elemento.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para establecer el ancho de un elemento?
      </_>
    ),
    "Respuesta Correcta": <_>width</_>,
    "Incorrecta 1": <_>max-width</_>,
    "Incorrecta 2": <_>min-width</_>,
    "Incorrecta 3": <_>size</_>,
    "Incorrecta 4": <_>flex</_>,
    justificacion: (
      <_>
        La propiedad 'width' define el ancho de un elemento, permitiendo asignar
        valores fijos o relativos.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para establecer la altura de un elemento?
      </_>
    ),
    "Respuesta Correcta": <_>height</_>,
    "Incorrecta 1": <_>max-height</_>,
    "Incorrecta 2": <_>min-height</_>,
    "Incorrecta 3": <_>line-height</_>,
    "Incorrecta 4": <_>flex</_>,
    justificacion: (
      <_>
        La propiedad 'height' determina la altura de un elemento, configurando
        su dimensión vertical.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor de display convierte un contenedor en un contenedor flexible?
      </_>
    ),
    "Respuesta Correcta": <_>flex</_>,
    "Incorrecta 1": <_>block</_>,
    "Incorrecta 2": <_>inline</_>,
    "Incorrecta 3": <_>grid</_>,
    "Incorrecta 4": <_>inline-block</_>,
    justificacion: (
      <_>
        El valor 'flex' aplicado a display convierte el contenedor en un flex
        container, activando el modelo flexbox para sus hijos.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para definir la dirección de los elementos
        en un contenedor flex?
      </_>
    ),
    "Respuesta Correcta": <_>flex-direction</_>,
    "Incorrecta 1": <_>justify-content</_>,
    "Incorrecta 2": <_>align-items</_>,
    "Incorrecta 3": <_>flex-wrap</_>,
    "Incorrecta 4": <_>order</_>,
    justificacion: (
      <_>
        La propiedad 'flex-direction' establece la dirección principal en la que
        se organizan los elementos dentro de un contenedor flex (fila o
        columna).
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS alinea los elementos dentro de un contenedor flex en
        su dirección principal?
      </_>
    ),
    "Respuesta Correcta": <_>justify-content</_>,
    "Incorrecta 1": <_>align-items</_>,
    "Incorrecta 2": <_>flex-direction</_>,
    "Incorrecta 3": <_>align-content</_>,
    "Incorrecta 4": <_>flex-grow</_>,
    justificacion: (
      <_>
        La propiedad 'justify-content' distribuye y alinea los elementos a lo
        largo del eje principal en un contenedor flex.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS alinea los elementos dentro de un contenedor flex en
        su dirección perpendicular?
      </_>
    ),
    "Respuesta Correcta": <_>align-items</_>,
    "Incorrecta 1": <_>justify-content</_>,
    "Incorrecta 2": <_>flex-direction</_>,
    "Incorrecta 3": <_>align-content</_>,
    "Incorrecta 4": <_>flex-shrink</_>,
    justificacion: (
      <_>
        La propiedad 'align-items' alinea los elementos a lo largo del eje
        transversal, complementando la alineación establecida por
        justify-content.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS permite que los elementos dentro de un contenedor
        flex se dispongan en múltiples líneas (según su dirección principal)?
      </_>
    ),
    "Respuesta Correcta": <_>flex-wrap</_>,
    "Incorrecta 1": <_>flex-direction</_>,
    "Incorrecta 2": <_>align-content</_>,
    "Incorrecta 3": <_>order</_>,
    "Incorrecta 4": <_>flex-flow</_>,
    justificacion: (
      <_>
        El 'flex-wrap' permite que los elementos se distribuyan en varias líneas
        si no caben en una sola, facilitando diseños responsivos.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS controla la capacidad de crecimiento de un elemento
        en un contenedor flex?
      </_>
    ),
    "Respuesta Correcta": <_>flex-grow</_>,
    "Incorrecta 1": <_>flex-shrink</_>,
    "Incorrecta 2": <_>flex-basis</_>,
    "Incorrecta 3": <_>align-self</_>,
    "Incorrecta 4": <_>order</_>,
    justificacion: (
      <_>
        La propiedad 'flex-grow' especifica cuánto puede expandirse un elemento
        en un contenedor flex para ocupar el espacio disponible.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cuál es la propiedad abreviada que engloba flex-grow, flex-shrink y
        flex-basis?
      </_>
    ),
    "Respuesta Correcta": <_>flex</_>,
    "Incorrecta 1": <_>inline-flex</_>,
    "Incorrecta 2": <_>flex-flow</_>,
    "Incorrecta 3": <_>justify-content</_>,
    "Incorrecta 4": <_>align-items</_>,
    justificacion: (
      <_>
        La propiedad abreviada 'flex' permite definir en una sola línea el
        comportamiento de crecimiento, contracción y tamaño base de un elemento
        flex.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué valor de flex-direction dispone los elementos en una fila?</_>
    ),
    "Respuesta Correcta": <_>row</_>,
    "Incorrecta 1": <_>column</_>,
    "Incorrecta 2": <_>row-reverse</_>,
    "Incorrecta 3": <_>column-reverse</_>,
    "Incorrecta 4": <_>grid</_>,
    justificacion: (
      <_>
        El valor 'row' organiza los elementos en una fila horizontal, que es el
        comportamiento predeterminado en flexbox.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué valor de flex-direction dispone los elementos en una columna?</_>
    ),
    "Respuesta Correcta": <_>column</_>,
    "Incorrecta 1": <_>row</_>,
    "Incorrecta 2": <_>column-reverse</_>,
    "Incorrecta 3": <_>row-reverse</_>,
    "Incorrecta 4": <_>inline</_>,
    justificacion: (
      <_>
        El valor 'column' organiza los elementos en una columna vertical,
        modificando la dirección principal en un contenedor flex.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cómo se comporta un elemento con position: relative?</_>,
    "Respuesta Correcta": (
      <_>Se posiciona en relación a su posición original</_>
    ),
    "Incorrecta 1": <_>Se posiciona fuera del flujo del documento</_>,
    "Incorrecta 2": <_>Se posiciona respecto a la ventana del navegador</_>,
    "Incorrecta 3": <_>Se posiciona de forma fija</_>,
    "Incorrecta 4": <_>Se posiciona de forma estática</_>,
    justificacion: (
      <_>
        Con 'position: relative', el elemento se desplaza respecto a su posición
        original sin alterar el espacio que ocupa en el flujo del documento.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Cómo se comporta un elemento con position: absolute?</_>,
    "Respuesta Correcta": (
      <_>
        Se posiciona respecto a su contenedor posicionado y queda fuera del
        flujo normal
      </_>
    ),
    "Incorrecta 1": <_>Se posiciona en relación a su posición original</_>,
    "Incorrecta 2": <_>Se posiciona de forma fija en la ventana</_>,
    "Incorrecta 3": <_>Se posiciona de forma estática</_>,
    "Incorrecta 4": <_>Se posiciona con respecto al viewport</_>,
    justificacion: (
      <_>
        Un elemento con 'position: absolute' se coloca en relación al primer
        contenedor con posición distinta a static, quedando fuera del flujo
        normal.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué efecto tiene aplicar position: fixed a un elemento?</_>,
    "Respuesta Correcta": (
      <_>
        El elemento se posiciona respecto a la ventana y permanece visible al
        hacer scroll
      </_>
    ),
    "Incorrecta 1": <_>El elemento se posiciona en relación a su contenedor</_>,
    "Incorrecta 2": <_>El elemento se mueve con el contenido</_>,
    "Incorrecta 3": <_>El elemento se vuelve parte del flujo normal</_>,
    "Incorrecta 4": <_>El elemento se posiciona de forma relativa</_>,
    justificacion: (
      <_>
        Con 'position: fixed', el elemento se fija en relación a la ventana del
        navegador, permaneciendo visible al desplazar la página.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué efecto tiene la propiedad z-index en elementos posicionados?</_>
    ),
    "Respuesta Correcta": (
      <_>Controla el orden de apilamiento de los elementos</_>
    ),
    "Incorrecta 1": <_>Ajusta el tamaño del elemento</_>,
    "Incorrecta 2": <_>Define el espacio entre elementos</_>,
    "Incorrecta 3": <_>Establece la transparencia del elemento</_>,
    "Incorrecta 4": <_>Modifica la dirección del posicionamiento</_>,
    justificacion: (
      <_>
        La propiedad 'z-index' determina el orden en que se apilan los
        elementos, haciendo que aquellos con valores mayores se muestren por
        encima de los de valores inferiores.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cuál es la función del valor 'auto' en las propiedades left, top, right
        y bottom?
      </_>
    ),
    "Respuesta Correcta": (
      <_>Permite que el navegador determine la posición automáticamente</_>
    ),
    "Incorrecta 1": <_>Establece la posición en cero</_>,
    "Incorrecta 2": <_>Centra el elemento</_>,
    "Incorrecta 3": <_>Hace que el elemento se oculte</_>,
    "Incorrecta 4": <_>Forza un comportamiento fijo</_>,
    justificacion: (
      <_>
        El valor 'auto' permite que el navegador calcule la posición del
        elemento basándose en otros parámetros sin necesidad de especificar una
        distancia fija.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué condición debe cumplir un contenedor para que un elemento con
        position: absolute se posicione respecto a él?
      </_>
    ),
    "Respuesta Correcta": (
      <_>El contenedor debe tener un position distinto de static</_>
    ),
    "Incorrecta 1": <_>El contenedor debe tener display: block</_>,
    "Incorrecta 2": <_>El contenedor debe tener un ancho fijo</_>,
    "Incorrecta 3": <_>El contenedor debe tener overflow: hidden</_>,
    "Incorrecta 4": <_>El contenedor debe tener position: fixed</_>,
    justificacion: (
      <_>
        Para que un elemento absoluto se posicione respecto a un contenedor,
        este último debe tener un valor de position distinto a 'static' (por
        ejemplo, relative, fixed o sticky).
      </_>
    ),
  },
  {
    Pregunta: (
      <_>¿Qué valor de z-index indica una mayor prioridad en el apilamiento?</_>
    ),
    "Respuesta Correcta": <_>Un valor numérico más alto</_>,
    "Incorrecta 1": <_>Un valor numérico más bajo</_>,
    "Incorrecta 2": <_>El valor 'auto'</_>,
    "Incorrecta 3": <_>El valor 'inherit'</_>,
    "Incorrecta 4": <_>El valor 'initial'</_>,
    justificacion: (
      <_>
        Un mayor valor numérico en 'z-index' indica que el elemento se apilará
        por encima de aquellos con valores menores.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué combinación de propiedades se utiliza comúnmente para centrar un
        elemento con position: absolute?
      </_>
    ),
    "Respuesta Correcta": (
      <_>top: 50%, left: 50% y transform: translate(-50%, -50%)</_>
    ),
    "Incorrecta 1": <_>margin: auto y text-align: center</_>,
    "Incorrecta 2": <_>display: flex y align-items: center</_>,
    "Incorrecta 3": <_>position: relative y left: 50%</_>,
    "Incorrecta 4": <_>top: 0, left: 0 y margin: auto</_>,
    justificacion: (
      <_>
        Esta combinación centra un elemento absoluto colocando sus bordes en el
        50% del contenedor y ajustándolo con transform para compensar su propio
        tamaño.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para centrar elementos horizontalmente en
        un contenedor flex?
      </_>
    ),
    "Respuesta Correcta": <_>justify-content</_>,
    "Incorrecta 1": <_>align-items</_>,
    "Incorrecta 2": <_>flex-direction</_>,
    "Incorrecta 3": <_>flex-wrap</_>,
    "Incorrecta 4": <_>order</_>,
    justificacion: (
      <_>
        La propiedad 'justify-content' alinea los elementos a lo largo del eje
        principal (horizontalmente en contenedores de fila) para centrar su
        distribución.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS se utiliza para centrar elementos verticalmente en un
        contenedor flex?
      </_>
    ),
    "Respuesta Correcta": <_>align-items</_>,
    "Incorrecta 1": <_>justify-content</_>,
    "Incorrecta 2": <_>flex-direction</_>,
    "Incorrecta 3": <_>flex-grow</_>,
    "Incorrecta 4": <_>flex-shrink</_>,
    justificacion: (
      <_>
        La propiedad 'align-items' centra los elementos a lo largo del eje
        transversal, logrando la alineación vertical en un contenedor flex.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cómo se invierte el orden de los elementos en un contenedor flex sin
        modificar el HTML?
      </_>
    ),
    "Respuesta Correcta": (
      <_>Usando flex-direction: row-reverse o column-reverse</_>
    ),
    "Incorrecta 1": <_>Usando order: -1 en todos los elementos</_>,
    "Incorrecta 2": <_>Aplicando align-items: flex-end</_>,
    "Incorrecta 3": <_>Utilizando justify-content: flex-end</_>,
    "Incorrecta 4": <_>Con display: inline-flex</_>,
    justificacion: (
      <_>
        Los valores 'row-reverse' y 'column-reverse' en la propiedad
        flex-direction invierten el orden visual de los elementos sin cambiar el
        orden en el HTML.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS define la alineación del contenido en un contenedor
        flex de múltiples líneas?
      </_>
    ),
    "Respuesta Correcta": <_>align-content</_>,
    "Incorrecta 1": <_>align-items</_>,
    "Incorrecta 2": <_>justify-content</_>,
    "Incorrecta 3": <_>flex-direction</_>,
    "Incorrecta 4": <_>flex-wrap</_>,
    justificacion: (
      <_>
        La propiedad 'align-content' controla la distribución del espacio entre
        las filas de un contenedor flex multi-línea.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor en justify-content distribuye los elementos con espacio igual
        entre ellos?
      </_>
    ),
    "Respuesta Correcta": <_>space-between</_>,
    "Incorrecta 1": <_>center</_>,
    "Incorrecta 2": <_>flex-start</_>,
    "Incorrecta 3": <_>flex-end</_>,
    "Incorrecta 4": <_>space-around</_>,
    justificacion: (
      <_>
        El valor 'space-between' distribuye los elementos dejando el mismo
        espacio entre ellos, colocando el primero y último en los extremos.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor en justify-content alinea todos los elementos al centro del
        contenedor?
      </_>
    ),
    "Respuesta Correcta": <_>center</_>,
    "Incorrecta 1": <_>space-between</_>,
    "Incorrecta 2": <_>flex-start</_>,
    "Incorrecta 3": <_>flex-end</_>,
    "Incorrecta 4": <_>space-around</_>,
    justificacion: (
      <_>
        El valor 'center' coloca todos los elementos en el centro del
        contenedor, distribuyendo el espacio de forma equitativa a cada lado.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué valor en justify-content alinea los elementos al final del
        contenedor?
      </_>
    ),
    "Respuesta Correcta": <_>flex-end</_>,
    "Incorrecta 1": <_>flex-start</_>,
    "Incorrecta 2": <_>center</_>,
    "Incorrecta 3": <_>space-between</_>,
    "Incorrecta 4": <_>space-around</_>,
    justificacion: (
      <_>
        El valor 'flex-end' alinea los elementos hacia el final del contenedor,
        situándolos en el extremo opuesto al inicio.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        En un elemento flex, ¿qué valor de flex-grow indica que el elemento no
        crecerá?
      </_>
    ),
    "Respuesta Correcta": <_>0</_>,
    "Incorrecta 1": <_>1</_>,
    "Incorrecta 2": <_>auto</_>,
    "Incorrecta 3": <_>none</_>,
    "Incorrecta 4": <_>inherit</_>,
    justificacion: (
      <_>
        Un valor de '0' en flex-grow indica que el elemento no se expandirá para
        ocupar el espacio adicional en el contenedor flex.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        En un elemento flex, ¿qué valor de flex-shrink indica que el elemento no
        se encogerá?
      </_>
    ),
    "Respuesta Correcta": <_>0</_>,
    "Incorrecta 1": <_>1</_>,
    "Incorrecta 2": <_>auto</_>,
    "Incorrecta 3": <_>none</_>,
    "Incorrecta 4": <_>inherit</_>,
    justificacion: (
      <_>
        Un valor de '0' en flex-shrink impide que el elemento se reduzca cuando
        el espacio en el contenedor es limitado.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS permite especificar el orden de aparición de los
        elementos dentro de un contenedor flex?
      </_>
    ),
    "Respuesta Correcta": <_>order</_>,
    "Incorrecta 1": <_>z-index</_>,
    "Incorrecta 2": <_>flex-direction</_>,
    "Incorrecta 3": <_>align-items</_>,
    "Incorrecta 4": <_>flex-wrap</_>,
    justificacion: (
      <_>
        La propiedad 'order' permite definir la secuencia de los elementos en un
        contenedor flex sin modificar el HTML.
      </_>
    ),
  },
  {
    Pregunta: <_>¿Qué sucede al aplicar display: flex a un contenedor?</_>,
    "Respuesta Correcta": (
      <_>Sus elementos hijos se convierten en elementos flex</_>
    ),
    "Incorrecta 1": <_>El contenedor se vuelve inline</_>,
    "Incorrecta 2": <_>Los elementos hijos se posicionan de forma absoluta</_>,
    "Incorrecta 3": <_>El contenedor se oculta</_>,
    "Incorrecta 4": <_>Se activa el modo grid</_>,
    justificacion: (
      <_>
        Al aplicar 'display: flex', el contenedor se transforma en un flex
        container y sus hijos adquieren el comportamiento de flex items,
        habilitando todas las propiedades de flexbox.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué propiedad CSS permite asignar tamaños relativos a los elementos
        dentro de un contenedor flex mediante una sintaxis abreviada?
      </_>
    ),
    "Respuesta Correcta": <_>flex</_>,
    "Incorrecta 1": <_>flex-flow</_>,
    "Incorrecta 2": <_>flex-basis</_>,
    "Incorrecta 3": <_>flex-wrap</_>,
    "Incorrecta 4": <_>order</_>,
    justificacion: (
      <_>
        La propiedad abreviada 'flex' combina flex-grow, flex-shrink y
        flex-basis en una sola línea, facilitando la asignación de tamaños
        relativos a los elementos.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Qué efecto tiene el valor 'space-around' en la propiedad
        justify-content?
      </_>
    ),
    "Respuesta Correcta": (
      <_>Distribuye los elementos con espacios iguales alrededor de cada uno</_>
    ),
    "Incorrecta 1": <_>Alinea los elementos al inicio</_>,
    "Incorrecta 2": <_>Centra los elementos</_>,
    "Incorrecta 3": <_>Alinea los elementos al final</_>,
    "Incorrecta 4": <_>No aplica ningún espacio extra</_>,
    justificacion: (
      <_>
        El valor 'space-around' agrega espacios iguales alrededor de cada
        elemento, logrando una distribución uniforme dentro del contenedor.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cómo se centra verticalmente un elemento dentro de un contenedor flex?
      </_>
    ),
    "Respuesta Correcta": <_>Usando align-items: center</_>,
    "Incorrecta 1": <_>Usando justify-content: center</_>,
    "Incorrecta 2": <_>Usando flex-direction: column</_>,
    "Incorrecta 3": <_>Usando flex-wrap: wrap</_>,
    "Incorrecta 4": <_>Usando order: 0</_>,
    justificacion: (
      <_>
        La propiedad 'align-items: center' centra los elementos a lo largo del
        eje transversal, logrando una alineación vertical en un contenedor flex.
      </_>
    ),
  },
  {
    Pregunta: (
      <_>
        ¿Cómo se centra un elemento en ambos ejes (horizontal y vertical) usando
        flexbox?
      </_>
    ),
    "Respuesta Correcta": <_>justify-content: center y align-items: center</_>,
    "Incorrecta 1": <_>flex-direction: column y justify-content: center</_>,
    "Incorrecta 2": <_>align-content: center y align-items: center</_>,
    "Incorrecta 3": <_>flex-wrap: wrap y justify-content: center</_>,
    "Incorrecta 4": <_>order: 0 y align-self: center</_>,
    justificacion: (
      <_>
        La combinación de 'justify-content: center' y 'align-items: center'
        centra el contenido tanto en el eje horizontal como en el vertical
        dentro de un contenedor flex, logrando una alineación perfecta.
      </_>
    ),
  },
];
