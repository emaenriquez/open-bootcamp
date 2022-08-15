
# Reaprendiendo js

# Tipo de datos en js

## primitivos

* number
* String
* booleano
* null
* undefined

# notacion

* ; -> declara el final de una linea
```js
    const a = 10;
```

* {} -> obj ,funciones y estructura de control
```js
    const movil = {
        altura: 7,
    }
```
* . -> se utiliza en los obj para accerder a los atributos
```js
    let obj = {
        nombre: "emanuel",
        apellido: "enriquez"
    }

    console.log(obj.nombre)
```
* [] -> lista , array
```js
    let arr =[ 1,2,3,1,21,21]
    console.log(arr[0])
```

* () -> se utiliza para las funciones
```js
    let a = 10;
    let b = 20
    function suma(a,b){
    // codigo
    }
    suma(a,b)
```

# Lista

```js
    let arr = [1,2,3"hola",true,undefined,null]
    let new_arr = new Array(2,"hola mundo",3,4,21)
    let arr_java = new Array(5)

    let arr_4 = [arr,new_arr,arr_java]
```

# objectos

```js
    const persona = {
        nombre: "emanuel",
        hobby: "aprender a programar",
        work: "repartidor de pizza",
        anio: 20,
        juegos_favoritos: ["mario cart","fall guys","minecraft"]
    }

    console.log(persona.nombre)  // emanuel
    console.log(persona.juegos_favoritos[0])
    const personas_varias = [
        {nombre:"emanuel", apellido:"enriquez"},
        {nombre:"juan", apellido:"perez"},
        {nombre:"leandro", apellido:"paredez"}
    ]

```

# Fechas

```js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("march 17 2022")
console.log(fecha_cadena)

const fecha_valores = new Date(2022,3,17)
console.log(fecha_valores);

const dia = ahora.getDay(); // obtener el dia
const mes = ahora.getMonth()+1; // obtener el mes
const anio = ahora.getFullYear(); // obtener el año
const time = ahora.getTime(); // obtener los milisegundos
ahora.toLocaleDateString("en-GB")
console.log(dia + " " + mes + " " + anio);
```

# estructuras de control en js

##  bifurcaciones 
### son estructura que nos permite elegir decidir si por un camino o otro

* if else
    * == solo compara el valor
    * === compara el valor y el tipo
    * <= < > >= == === !== !===
```js
let saldo = 50;
let efectivo = 20;


if(efectivo < saldo){
    console.log("pudes sacar dinero")
} 

if(efectivo < saldo){
    console.log("puedes sacar dinero");
} else{
    console.log("saldo insufiente");
}

let nota = 5

if(nota === 5){
    console.log("5");
} else if (nota === 4){
    console.log("4");
} else if (nota === 3){
    console.log("3");
} else if (nota === 2){
    console.log("2");
} else if (nota === 1){
    console.log("1");
}

```

* switch

```js
    switch (nota) {
    case 5:
        console.log("5")
        break;
    case 4:
        console.log("4")
        break;
    case 3:
        console.log("3")
        break;
    case 3:
        console.log("3")
        break;
    case 2:
        console.log("2")
        break;
    case 1:
        console.log("1")
        break;  
    default:
        console.log("error");
        break;
}

```

## bucles

### for 

```js
    for(let =i; i < 10; i++){
        console.log(i)
    }

    let list = [1,2,3,4,5,6,7,8,9,0]

    for(let i =0; i < list.length; i++){
        console.log(list[0])
    }
```

#### for of
muestra el valor del arr o obj
```js 
    let list = [1,2,3,4,5,6,7,8,9,0]

    for(item of list){
        console.log(item)
    }
```

#### for in
```js
    let person = {
        nombre: "emanuel",
        aprellido: "Enriquez",
        edad:19,
        developer:true  
    }

    for (const propiedad in person) {
        // muestra las propiedades
        console.log(propiedad)
        // muestra el valor
        console.log(person[propiedad])
    }

```

### forEach
recore un arr
```js
    let list = [1,2,3,21,21,21,31,314,231]

    list.forEach(item=> console.log(item))
```
### bucles while
```js
    let cont = 0
    let m = 10
    while (cont < m) {
        console.log(cont)
        cont++
    }

    cont = 0;
    do{
        cont++
    } while(cont < m)
```

### casos especificos - break - continue
```js
let l = [0,1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < l.length; i++) {

    if(l[i] === 3){
        continue;
    }

    console.log(l[i])

    if(l[i] > 6){
        break;
    }
}
```

# string

```js
    let str = "emanuel"
    let str_2 = 'emanuel'
    let str_3 = `emanuel`
    let saludo = `hola ${str}`

    // devuelve la cantidad de caracteres que tiene un string

    console.log(saludo.length)
```
## obtener partes de cadenas slice() substring() 
```js
    let nombre = "emanuel"
    console.log(nombre.slice(0,5))
    console.log(nombre.substring(0,5))
```
## remplazar parte del contenido de una cadena - solo remplaza la primera instancia - replace()

```js
    console.log(nombre.replace('emanuel','moure dev'))

    let str_larga = "el emanuel es un genio de la programacion"

    console.log(str_larga.replace('el','los'))

    // al utilizar la expresion regular G  remplaza todas las instancia 
    console.log(str_larga.replace(/el/g,'los'))
```
## convertir string en min y mayus toLowerCase() minuscula - toUpperCase() mayuscula
```js
    let nombre = "emanuel"
    console.log(nombre.toLowerCase())
    console.log(nombre.toUpperCase())
```

## concatenar varios string

```js
    let p = "hola yo soy la primera cadena"
    let p1 = " hola yo soy la segunda cadena"

    console.log(p.concat(p1))   
    console.log(p.concat(" ",p1," yo soy uno mas "))
    console.log(p + " " + p1)   
    console.log(`${p} ${p1}`)
```

## eliminar espacio al inicio y al final - trim()
```js
    let elimi = "  soy un string con espacio al final   "
    console.log(elimi.length)
    console.log(elimi.trim().length)
    console.log(elimi.trimStart().length)
    console.log(elimi.trimEnd().length)
```

## obtener el caracter que hay en sierta posicion

```js

    let obt = "hola soy obtener"
    console.log(obt.charAt(0))

```
## obtener la posicion de una palabra en un string

```js
    let op = "hola soy emanuel"
    console.log(op.indexOf("emanuel"))  
    console.log(op.lastIndexOf("emanuel"))
```

## Expresiones regulares y metodos de busqueda de cadenas - match() - includes() - startWith() - endsWith()

```js
    let st = "el emanuel es un genio de la programacion"

    // El método devuelve una matriz con las coincidencias
    console.log(st.match(/es/g))

    // si incluye cierta palabra 
    console.log(st.includes("emanuel"))

    // si el texto empieza por una palabra
    console.log(st.startsWith("el"))

    // si el texto termina por una palabra
    console.log(st.endsWith("le"))
```
# Numeros

```js
    let a = 5

    let b = 0.1

    let c = 0.2

    // pequeño truco
    console.log(Math.round((c + b) * 100) / 100)
```

##  principales operaciones aritmetricas  suma (+) resta(-) multiplicacion(*) division(/)
```js
    let d = 3.5
    let e = 4.8

    console.log(d+e)
    console.log(d-e)
    console.log(d*e)
    console.log(d/e)
```

## representacion de los numeros en cadenas de texto

```js
    let a = 10
    console.log(typeof a)
    let a_s = a.toString()
    console.log(typeof a_s)
```

## .toFixed(x) le decimos cuanto decimales queremos

```js
    let g = 3.33333333333333333
    console.log(Number(g.toFixed(1)))

    // le agrega decimales
    let h = 2109219031
    console.log(h.toFixed(2))
```
## .toPrecision(x) - limita el numero de cifra significativas

```js
    let g = 3.33333333333333333
    console.log(g.toPrecision(4))
```
## .valueOf() - obtener valores numericos a partir de naturales

```js
    let num1 = new Number(4)

    console.log(num1)
    console.log(num1.valueOf())

    let str = new String("Hola mundo")
    console.log(str)
    console.log(str.valueOf())
```
## NaN (not a numeber) - Infinity - cuando estemos diviendo por cero
```js
    let n = new Number("hola soy")
    console.log(isNaN(n))

    let numerador = 19
    let divisor = 0
    let divisor_2 = null
    console.log(numerador / divisor)
    console.log(numerador / divisor_2)
```

## convertir string a numeros Number ,parseInt , parseFloat
```js
    let n1 = "5.90"
    let n2 = 19.0

    console.log(n1 + n2)
    console.log(Number(n1) + n2)

    console.log(parseInt(n1)) // lo convierte en un numero entero le saca los decimales
    console.log(parseFloat(n1)) // lo convierte en un entero con decimales
```
## numeros hexadecimales
```js
    let hex = "FFF"
    console.log(parseInt(hex,16))
```
## obtener valores maximo y minimo que podemos obtener en js
```js
    let number_epsilon = Number.EPSILON; // el minima diferencia que puede aver entre un numero y el siguiente
    let min_valor_js = Number.MIN_VALUE; // el mininmo valor de js  
    let max_valor_js = Number.MAX_VALUE;

    console.log(number_epsilon)
    console.log(min_valor_js)
    console.log(max_valor_js)
```
