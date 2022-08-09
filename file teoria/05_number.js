
// seccion 5 - numbers
// variables numericas (enteros y decimales)
let a = 5

console.log(a)

let b = 0.1

console.log(b)

let c = 0.2

console.log(c + b)

// pequeño truco
console.log(Math.round((c + b) * 100) / 100)

console.log("-------------")

// principales operaciones aritmetricas
let d = 3.5
let e = 4.8

// suma (+) resta(-) multiplicacion(*) division(/)
console.log(d+e)
console.log(d-e)
console.log(d*e)
console.log(d/e)

console.log("-------------")
// representacion de los numeros en cadenas de texto
console.log(typeof a)
let a_s = a.toString()
console.log(typeof a_s)

console.log("-------------")
// redondeo de los numeros decimales

let f = 3.3
let g = f * 3

console.log(g)
// .toFixed(x) le decimos cuanto decimales queremos

console.log(Number(g.toFixed(1)))
// le agrega decimales
let h = 2109219031
console.log(h.toFixed(2))

// .toPrecision(x) - limita el numero de cifra significativas
console.log(g.toPrecision(4))

console.log("-----------------")

// operador .valueOf() - obtener valores numericos a partir de naturales

let num1 = new Number(4)

console.log(num1)
console.log(num1.valueOf())

let str = new String("Hola mundo")
console.log(str)
console.log(str.valueOf())
console.log("-----------------")
// NaN (not a numeber) - Infinity - cuando estemos diviendo por cero
let n = new Number("hola soy")
console.log(n)
console.log(isNaN(n))

let numerador = 19
let divisor = 0
let divisor_2 = null
console.log(numerador / divisor)
console.log(numerador / divisor_2)
console.log("-----------------")
// convertir string a numeros Number ,parseInt , parseFloat

let n1 = "5.90"
let n2 = 19.0

console.log(n1 + n2)
console.log(Number(n1) + n2)

console.log(parseInt(n1)) // lo convierte en un numero entero le saca los decimales
console.log(parseFloat(n1))

console.log("-----------------")
// numeros hexadecimales

let hex = "FFF"
console.log(parseInt(hex,16))

console.log("-----------------")
// obtener valores maximo y minimo que podemos obtener en js

let number_epsilon = Number.EPSILON; // el minima diferencia que puede aver entre un numero y el siguiente
let min_valor_js = Number.MIN_VALUE; // el mininmo valor de js
let max_valor_js = Number.MAX_VALUE;

console.log(number_epsilon)
console.log(min_valor_js)
console.log(max_valor_js)


console.log("-----------------")
