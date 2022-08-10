
// trabajando con lista (array)

//let array = [1,2,3,4,5,6]
let n = 23
let array = [1,"hola",false,{ id:5 },null,undefined,n]

// acceder a los valores de un array a traves de su posicion
// array[indice]
console.log(array[4])

// introducir nuevos valores

array.push("final") // valores al final
array.unshift("inicio") // valores al inicio

console.log(array)

// eliminar valores de un array
let new_array = [1,2,3,4,5,"hola mundo"]
new_array.pop() // elimina valores al final
new_array.shift() // elimina valores al inicio
console.log(new_array)

// metodo para eliminar , modificar añadir valores en nuestro array
// .splice(x,y,z)
let new_array_3 = [1,2,3,4,5,6]

//new_array_3.splice(2,3) // elimina valores .splice(index,valoresEliminar)
new_array_3.splice(2,0,"hola") // agrega valores
console.log(new_array_3)

// modificar valores
new_array_3.splice(3,1,"nuevo tres")

console.log(new_array_3)

// unir dos array .concat()

let ar1 = ["hola",32,true,null]
let ar2 = ["adios",9,8,undefined]

let ar3 = ar1.concat(ar2)

console.log(ar3)

// como unir dos arr con el factor de propagacion

const ar4 = [...ar1 ,...ar2]

console.log(ar4)

// ERROR

const ar5 = [ar1,ar2]
console.log(ar5)


// como obtener una lista apartir de otra .slice() 

const a = ["hola",1,2,3,4,null,undefined,"adios"]

// no modifica el valor de arr original - el ultimo valor no lo toma
let arr_b = a.slice(1,5)
console.log(arr_b)


// iterar valores de una lista

console.log("------------")

let new_arr = [1,2,34,5,76,21,21]

// forma antigua 
for (let i = 0; i < new_arr.length; i++) {
    console.log(new_arr[i])
}
console.log("------------")
// mas eficiente

let cont = 0
new_arr.forEach(item => {
    cont += item
})

console.log(cont)

// buscar una valor dentro de una lista .find()

let find = new_arr.find(item => {
    if(item === 1){
        return true
    }
})

console.log(find)

const obj = [
    {nombre:"emanuel", edad:19},
    {nombre:"david",edad:25},
    {nombre:"miguel",edad:28},
    {nombre:"luis",edad:5},
    {nombre:"lucia",edad:26}
]

/*
const edad_obj = obj.find(item=>{
    if(item.nombre === "emanuel"){
        return true
    }
})
*/
console.log("------------")

const edad_obj = obj.find(item=>item.nombre === "emanuel")

const {edad} = obj.find(item => item.nombre === "miguel")

// .map() 
let arr_city_movie = ["Gotica","Smallvile","New York","Atrantis"]

let arr_city_index = arr_city_movie.map((index,item)=> `${item + 1} - ${index}`)

console.log(arr_city_index)

// .filter()



// .reduce()