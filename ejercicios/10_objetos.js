/**
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
const datos_personales = {
    nombre: "emanuel",
    apellido: "enriquez",
    edad: 19,
    altura: 1.67,
    isDeveloper: true
}

let edad = "edad"
// edad = datos_personales.edad

console.log(datos_personales[edad])

const lista = [
    {...datos_personales},
    {
        nombre: "hernan",
        apellido: "gonalez",
        edad: 20,
        altura: 1.50,
        isDeveloper: false
    },
    {
        nombre: "javier",
        apellido: "lascano",
        edad: 19,
        altura: 1.67,
        isDeveloper: false
    }
]

const edad_ordenada = lista.sort((a,b)=> a.edad - b.edad)


console.log(edad_ordenada)