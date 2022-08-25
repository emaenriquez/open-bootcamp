

let dc_movies = ["the batman","Harley quin","wonder wowan"]

const marvel = [
    {name:"capitana marvel",poder:100},
    {name:"Capitan america",poder:300},
    {name:"Iro Man",poder:700}
]
console.log("----------------")
console.log("mostrarndo los superheroes de marvel")

marvel.forEach(item=> console.log(item.name))

console.log("----------------")
console.log("los superheroes de marvel filtrados por poder")

marvel.filter(poder=>{
    if(poder.poder > 200) console.log(`${poder.name} con poder de ${poder.poder}`)
}) 

console.log("----------------")
console.log("probando los for in and of")

console.log("for in")
for (const index in dc_movies) {
    console.log(index)
}
console.log("for of")
for (const element of dc_movies) {
    console.log(element)
}

console.log("----------------")
console.log("metodo find")

//let buscar_pelicula = prompt("introduzca una pelicula")

const devolver_elemento = marvel.find(pelicula => pelicula.name === "capitana marvel")

console.log(devolver_elemento) 

console.log("----------------")
const lista_super = ["spider","ant","iro","super"]

const man = "man"

const super_completo = lista_super.map((items,index)=> `${items}-${man} se encuentra en el indice ${index}`)

console.log(super_completo)

let vengadores = [
    {nombre: "steve rogers", nombreHeroe: "captain america"},
    {nombre: "tony stark", nombreHeroe: "iron man"},
    {nombre: "bruce banner", nombreHeroe: "the hulk"},
    {nombre: "peter parker", nombreHeroe: "spiderman"},
    {nombre: "tchalla", nombreHeroe: "black panther"}
]

let v = vengadores.map(items=> `el nombre real es ${items.nombre} y el nombre de superherores es ${items.nombreHeroe}`)


let dc = dc_movies.forEach(item=> console.log(item))

let str = "como ganar en clahs royale"



console.log(str.slice(0,4))

console.log(str.replace("como","el"))

console.log(str.match(/ganar/g))

console.log(str.includes("como"))

console.log(str.startsWith("como"))

console.log(str.endsWith("le"))

let n = Number(4)

console.log(n.valueOf())



let n_arr = [1,2,3,4,6,7,8,9,0,10,31,321,32]

let n2_arr = ["hola",4,65,6,12,21]

let some_arr = n2_arr.some(item => item == 12);

console.log(some_arr)

n_arr.splice(6,0,"Hola Mundo")
n_arr.splice(2,4)
console.log(n_arr)

let n3_arr = [...n_arr,...n2_arr]

console.log(n3_arr)

let parte = n2_arr.slice(1,4)


console.log(parte)

const arl = [1,2,3,4,6,8,9,4] 

const arl_set = new Set(arl);

console.log(arl_set.valueOf())

console.log(arl_set.size)

const data = [
    {titulo: "aprende javascript",anio:"2021",isbn:"2121",author:"carlos"},
    {titulo: "javascript",anio:"2019",isbn:"2123",author:"deme"},
    {titulo: "c++",anio:"2022",isbn:"2124",author:"juan"}
]

//const data = []

function getData(){
    return new Promise((resolve,reject)=> {
        if(data.length === 0) reject(new Error("ha salido une error"))

        setTimeout(()=>{
            resolve(data)
        },2000)
    })
}

getData()  
    .then(res => console.log(res))
    .catch(error => console.log(error))