

//Una cadena de texto con tu Nombre
let nombre = "emanuel"
// Otra cadena de texto con tu Apellido
let apellido = "enriquez"
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `  estudiante: ${nombre} ${apellido}  `
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let str_length = estudiante.length
// Una variable que contenga la primera letra del Nombre
let firts_nombre = nombre.charAt(0)
// Otra variable que contenga la última letra del Apellido
let last_apellido = apellido.substring(apellido.length-1,apellido.length)
// Una cadena de texto que elimine los espacios de la variable "estudiante"
let elmini = estudiante.trim()
// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let includ = estudiante.includes(nombre)
