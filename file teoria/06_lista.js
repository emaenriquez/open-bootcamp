
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

const obj = [
    {nombre:"emanuel", edad:19},
    {nombre:"david",edad:25},
    {nombre:"miguel",edad:28},
    {nombre:"luis",edad:5},
    {nombre:"lucia",edad:26}
]

console.log("------------")

const edad_obj = obj.find(item=>item.nombre === "emanuel")

const {edad} = obj.find(item => item.nombre === "miguel")

// .map() como foreach pero devuelve un nuevo array
let arr_city_movie = ["Gotica","Smallvile","New York","Atrantis"]

let arr_city_index = arr_city_movie.map((index,item)=> `${item + 1} - ${index}`)

console.log(arr_city_index)

// .filter()
let age = obj.filter(obj => obj.edad > 20)
console.log(age)

let nom = obj.filter(obj => obj.nombre !== "miguel")
console.log(nom)

// .reduce() obtiene un valor a partir de una lista
console.log("----------------")
const valores =[1,2,3,4,5,6,7,8,1,1]

const suma = valores.reduce((cont,valorActual,index,arr)=>{
    return cont + valorActual
})

console.log(suma)


// ordenacion de lista y comparacion entre dos lista

// .sort() - modifica el arr
console.log("----------------")

let numeros = [1,2,3,12,21,421,21,21,312,131,1231]
console.log(numeros)
numeros.sort((a,b)=> {
    if(a<b){
        return -1
    } else if(a > b){
        return +1
    } else{
        return 0
    }
})
console.log(numeros)

// ordenar unicamente array numericos

let arrNum = [12,31,2,12,21,213,1]

arrNum.sort((a,b) => a-b)

console.log(arrNum)

obj.sort((a,b)=> a.edad - b.edad)

console.log(obj)

// como comparar una lista
// every()

let arr = [1,2,3,4,5,6,71,21,-1,-2,-3,21,21,-4]

const result = arr.every(valor => valor > 0)
const result_2 = arr.every(valor => typeof valor === "number")

console.log(result)
console.log(result_2)

// Error asi no se pueden comparar lista
let r1 = [1,2,3,4]
let r2 = [1,2,3,4]
let r3 = [1,2,3,6]

console.log( r1 === r2)

// como debemos comparar

const comparacionArr = (r1,r2)=>{
    if(r1.length !== r2.length) return false
    const res = r1.every((valor,index)=> valor === r2[index])
    return res
}

console.log(comparacionArr(r1,r2)) // true
console.log(comparacionArr(r1,r3)) // false

// identificar si existe un valor en un arr
// te devuelve true si almenos uno de los elementos los cumple
// some()

console.log("-------")

let nume = [1,23,4,6,7,32,21,21,341,31,21,31]

const res = nume.some(valor=> valor > 0) // true
const existe = nume.some(valor=> valor === 2) // false

const existe_person = obj.some(valor => valor.nombre === "miguel")

console.log(res)
console.log(existe)
console.log(existe_person)

// como obtener una lista a partir de un obj iterable

const str = "hola soy emanuel"

const str_arr = Array.from(str)

console.log(str_arr)

const key = array.keys()
console.log(key)

const arr_key = Array.from(key)

console.log(arr_key)