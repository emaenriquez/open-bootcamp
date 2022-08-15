

// sets o conjunto
// conjunto no ordenado de valores unicos - nunca permite almacenar valores ya existente
// la diferencia entre arr y sets es que los set nos permite asegurarnos de que dentro del conjunto los valores
// no van a estar repetidos 
const arr = [1,2,3,4,5,2,3,4,5,10,"hola",{id:5},{id:5},"hola"]

const sets = new Set(arr)

// .add() añade elementos

//sets.add("11")

// .delete() elimina elementos

//sets.delete("hola")

// .clear() elemina todos los elementos

//sets.clear()

// .has() si incluye un valor

//sets.has(1)

// .size() tamaño del set 
console.log(sets.size)

sets.forEach(item=>{
    console.log(item)
})

const i_set = sets.values()
console.log(i_set)

const arr1 = [...sets]

console.log(arr1[0])

// trabajando con obj

const obj = {
    id:5,
    nombre: "emanuel",
    apellido: "enriquez",
    isdeveloper: true,
    librosFavoritos: ["programacion","harry"],
    '4-juegos': [1,2,3,4]
}

let prop = "isdeveloper"

console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.nombre = "david"
console.log(obj2.nombre)

console.log(obj.nombre)

const obj3 = {...obj}

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

// como ordenar una lista de obj en funcion de una propieda

const obj_movie = [

    {pelicula: "The Incredible Hulk", año:2008},
    {pelicula: "Iron Man 2", año:2010},
    {pelicula: "Thor", año:2011}

]

const movie = obj_movie.sort((a,b)=> a.año - b.año)

console.log(movie)

// tranajando con fechas

const fechas = new Date()

console.log(fechas.toLocaleDateString("en-GB"))