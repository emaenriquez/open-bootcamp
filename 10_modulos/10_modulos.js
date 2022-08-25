
// Modulos
// es una parte dodigo que se puede reutilizar en diferentes partes de un codigo

// forma de importar/exportar modulos

// 1.commonJS - require
// 2.Import ES6 - import

//import moduleMate from './modulos/matematicas'

// const moduleMate = require('./modulos/matematicas.js')

const {suma} = require('./modulos/matematicas.js')

const fact = suma(10,10)

console.log(fact)

// console.log(module)