export const questions = [
  {
    q: "¿Cuál es la diferencia entre Internet y la World Wide Web?",
    a: "Internet es una red de redes, en cambio, la WWW es un sistema de transferencia de información basado en internet."
  }, 
  {
    q: "¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?",
    a: `GET: Mandar una petición a algún servidor. HEAD: Mandar metadatos al momento de hacer una petición, como tokens. POST: Mandar datos a guardar o procesar al servidor. PUT, PATCH: Actualizar datos en el servidor. DELETE: Mandar petición de borrado de algún dato.`
  },
  {
    q: "¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?",
    a: "Se debe usar POST, ya que así nos aseguramos que la información sensible no sea visible del lado del cliente y no se muestre en la URL."
  },
  {
    q: "¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?",
    a: "Depende. Si el error lo obtuvo al dar click en algún enlace puesto por el desarrollador, entonces sí. Pero si el error se originó cuando el usuario ingresó directamente la URl en el navegador, entonces no es responsabilidad del desarrollador."
  },
  {
    q: "¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?",
    a: "GET."
  },
  {
    q: "Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?",
    a: "Significa que todo está bien, no hay que hacer ninguna corrección."
  },
  {
    q: "¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?",
    a: "El error 500 es tal vez lo peor que puede pasar cuanso se ingresa a un sitio en internet. Es completa responsabilidad del desarrollador que el servidor no retorne 500, ya que significa que ocurrió algún error en el código."
  }, 
  {
    q: "¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.",
    a: "Significa que ya no tiene total soporte por los navegadores, que ya esté en desuso. <i>, <div> (aún en discusión), <b>, etc"
  },
  {
    q: "¿Cuáles son las diferencias principales entre HTML 4 y HTML5?",
    a: "La principal diferencia es el DOCTYPE, que en HTML5 es muy simplificado. Otra es que ahora algunas etiquetas ya no necesitan su correspondiente etiqueta de cierre, tales como <br>. Ahora las etiquetas meta tienen más capacidades y son más simples."
  },
  {
    q: "¿Qué componentes de estructura y estilo tiene una tabla?",
    a: "<thead> <tbody> <tfoot>"
  },
  {
    q: "¿Cuáles son los principales controles de una forma HTML5?",
    a: "inputs, con los tipos text y submit"
  },
  {
    q: "¿Qué tanto soporte HTML5 tiene el navegador que utilizas?",
    a: "YOUR BROWSER SCORES 504 OUT OF 555 POINTS. Uso Google Chrome."
  }, 
  {
    q: "¿Cuál es el ciclo de vida de los sistemas de información?",
    a: "Planificación, análisis, diseño, implementación, pruebas, despliegue, uso y mantenimiento."
  }, 
  {
    q: "¿Cuál es el ciclo de desarrollo de sistemas de información?",
    a: "Los encargados de desarrollar software pueden instalar software comprobando a terceros o escribir programas diseñados a la medida del solicitante. La elección depende del costo de cada alternativa, del tiempo disponible para escribir el software y de la disponibilidad de los programadores.Por lo general, los programadores que trabajan en las grandes organizaciones pertenecen a un grupo permanente de profesionales."
  },
  {
    q: "URL",
    a: "Uniform Resource Locator, es la dirección que se asigna a cada recurso que se encuentra en internet."
  },
  {
    q: "MIME",
    a: "Son la manera standard de mandar contenido a través de la red. Especifican el tipo de datos que contiene un archivo. "
  },
  {
    q: "XML",
    a: "Es una especificación de W3C como lenguaje de marcado de propósito general. Es un 'primo' del HTML."
  },
  {
    q: "XHTML",
    a: "Es básicamente HTML especificado com XML."
  },
  {
    q: "HTML5",
    a: "Es la estandarización más moderna que junta varias tecnologías web, que son el HTML, CSS y JS"
  },
  {
    q: "JS",
    a: "Lenguaje de programación orientado a objetos. Fue principalmente desarrollado para interactuar en el lado del cliente, pero actualmente es ampliamente utilizado en el backend, gracias a su gran flexibilidad que ofrece. Empresas que lo utilizan en el backend: Netflix, Uber, etc."
  }, 
  {
    q: "PHP",
    a: "Lenguaje de programación diseñado para manejar datos en el servidor y renderizarlos en el cliente."
  }, 
  {
    q: "JSP",
    a: "Similar a PHP, solamente que usa Java."
  }, 
  {
    q: "AJAX",
    a: "Permite las peticiones asíncronas en las páginas web con respuestas de JS o XML"
  }
]
