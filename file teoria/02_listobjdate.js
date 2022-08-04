
//listas

const lista = [1,"hola",true,undefined,null]
const lista2 = new Array(2,"hola",true,undefined,null);
const lista3 = new Array(5)
lista3[0] = "soy 0"

const lista4 = [lista,lista2,lista3]

console.log(lista);
console.log(lista2);
console.log(lista3)
console.log(lista4);
//obj

const movil = {
    altura: 5,
    achura: 10,
    marca: "xiaomi",
    iswhile: false,
    contactos: ["leo","cristian","hernan","hector"],
    tarjeta: {
        marca: "drangon",
        almacenamiento: 12
    },
    "altura-targeta": 3
}

movil.anio = 2019
movil.marca = "sansung"

console.log(movil.marca);
console.log(movil.altura)
console.log(movil.contactos[0])
console.log(movil.tarjeta.almacenamiento)

//date moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 17 2022")
console.log(fecha_cadena)

const fecha_valores = new Date(2022,3,17)
console.log(fecha_valores);

const dia = ahora.getDay();
const mes = ahora.getMonth()+1;
const anio = ahora.getFullYear();
console.log(dia + " " + mes + " " + anio);
