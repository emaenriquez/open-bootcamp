
/*
- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

const compra = ["huevo","leche","zanahoria","manzana","milanesa"]

compra.push("Aceite de Girasol")
compra.pop()
console.log(compra)

const pelis = [
    {nombre:"The Incredible Hulk", Director:"Louis Leterrier",fecha: new Date(2008,6,13)},
    {nombre:"Iron Man 2",Director:"Jon Favreau",fecha: new Date(2010,4,28)},
    {nombre:"Thor",Director:"Matthew Vaughn",fecha: new Date(2011,4,30)}
]

let fecha_posterior = new Date(2010,1,1)

const pelis_posteriores = pelis.filter(date => date.fecha > fecha_posterior)

const directores = pelis.map(item=> item.Director)

const titulos = pelis.map(item=> item.nombre)

const dire_titulos = directores.concat(titulos)

const arr = [...directores,...titulos]
