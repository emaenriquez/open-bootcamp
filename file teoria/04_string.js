
// string

let str = "hola mundo"

let str_2 = 'hola mundo'

// comillas invertida

let srt_3 = `hola mundo`
console.log(srt_3)

let nombre = "emanuel"

let saludo = `hola ${nombre}`

console.log(saludo)

let plantillas = `
<div>
    <h1>nombre pokemon</h1>
    <p>fuerza: </p>
    <p>Habilidad: </p>
</div>`

let libros = ["Harry Potter","Persy","El mago de OZ"]

console.log(nombre.length);

//obtener partes de cadenas
//  slice() substring() 
console.log(nombre.slice(0,5))
console.log(nombre.substring(0,5))

// remplazar parte del contenido de una cadena
// solo remplaza la primera instancia
// replace()
console.log(nombre.replace('emanuel','moure dev'))

let str_larga = "el emanuel es un genio de la programacion el tambien es en el clash royale"

console.log(str_larga.replace('el','los'))

console.log("-------------");

// al utilizar la expresion regular G  remplaza todas las
// instancia
console.log(str_larga.replace(/el/g,'los'))

// convertir string en min y mayus 
// toLowerCase() minuscula - toUpperCase() mayuscula
let input = 'Psicis'
let db = 'psicis'


console.log(input.toLowerCase() === db.toLowerCase())

// concatenar un string

let p = "hola yo soy la primera cadena"
let p1 = " hola yo soy la segunda cadena"

console.log(p.concat(p1))
console.log(p.concat(" ",p1," yo soy uno mas "))
console.log(p + " " + p1)
console.log(`${p} ${p1}`)

// eliminar espacio al inicio y al final
// trim()
let elimi = "  soy un string con espacio al final   "
console.log(elimi.length)
console.log(elimi.trim().length)
console.log(elimi.trimStart().length)
console.log(elimi.trimEnd().length)

// obtener el caracter que hay en sierta posicion

let obt = "hola soy obtener"

console.log(obt.charAt(0))
console.log(obt[1])

// obtener la posicion de una palabra en un string

let op = "hola soy emanuel"
console.log(op.indexOf("emanuel"))
console.log(op.lastIndexOf("emanuel"));

//Expresiones regulares y metodos de busqueda de cadenas

let st = "el emanuel es un genio de la programacion el tambien es en el clash royale"

console.log(st.match(/es/g))
//
console.log(st.includes("emanuel"))

// si el texto empieza por una palabra
console.log(st.startsWith("el"))
// si el texto termina por una palabra
console.log(st.endsWith("le"))