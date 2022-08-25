
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

# metodos de lista y como obtener su valor

* acceder a los valores de un array a traves de su posicion

```js
    let n = 23
    let array = [1,"hola",false,{ id:5 },null,undefined,n]
    console.log(array[4])
```

* introducir nuevos valores

```js
    let array = [1,"hola",false,{ id:5 },null,undefined,n]
    array.push("final") // valores al final
    array.unshift("inicio") // valores al inicio
```

* eliminar valores de un array
```js
    let new_array = [1,2,3,4,5,"hola mundo"]
    new_array.pop() // elimina valores al final
    new_array.shift() // elimina valores al inicio
```
* .splice(x,y,z)
metodo para eliminar , modificar añadir valores en nuestro array

```js
    let new_array_3 = [1,2,3,4,5,6]

    new_array_3.splice(2,3) // elimina valores .splice(index,valoresEliminar)
    new_array_3.splice(2,0,"hola") // agrega valores

    // modificar valores
    new_array_3.splice(3,1,"nuevo tres")
```
* .concat()
unir dos array 
```js
    let ar1 = ["hola",32,true,null]
    let ar2 = ["adios",9,8,undefined]

    let ar3 = ar1.concat(ar2)

    // como unir dos arr con el factor de propagacion

    const ar4 = [...ar1 ,...ar2]

    // ERROR

    const ar5 = [ar1,ar2]
```

* .slice() 
como obtener una lista apartir de otra
```js
    const a = ["hola",1,2,3,4,null,undefined,"adios"]

    // no modifica el valor de arr original - el ultimo valor no lo toma
    let arr_b = a.slice(1,5)
```

* forEach
iterar valores de una lista
```js
    let new_arr = [1,2,34,5,76,21,21]

    // forma antigua 
    for (let i = 0; i < new_arr.length; i++) {
        console.log(new_arr[i])
    }

    // mas eficiente

    let cont = 0
    new_arr.forEach(item => {
        cont += item    
    })
```
* .find()
buscar una valor dentro de una lista 

```js
    let new_arr = [1,2,34,5,76,21,21]
    
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

    const edad_obj = obj.find(item=>item.nombre === "emanuel")
```
* .map() 
como foreach pero devuelve un nuevo array
```js
    let arr_city_movie = ["Gotica","Smallvile","New York","Atrantis"]

    let arr_city_index = arr_city_movie.map((index,item)=> `${item + 1} - ${index}`)
```

* .filter()
```js
    const obj = [
        {nombre:"emanuel", edad:19},
        {nombre:"david",edad:25},
        {nombre:"miguel",edad:28},
        {nombre:"luis",edad:5},
        {nombre:"lucia",edad:26}
    ]
    let age = obj.filter(obj => obj.edad > 20)

    let nom = obj.filter(obj => obj.nombre !== "miguel")
```

* .reduce() 
obtiene un valor a partir de una lista
```js
    const valores =[1,2,3,4,5,6,7,8,1,1]

    const suma = valores.reduce((cont,valorActual,index,arr)=>{
        return cont + valorActual
    })
```

* .sort() 
modifica el arr - ordenacion de lista y comparacion entre dos lista

```js

    // ordenar unicamente array numericos

    let arrNum = [12,31,2,12,21,213,1]
    arrNum.sort((a,b) => a-b)
    
    const obj = [
        {nombre:"emanuel", edad:19},
        {nombre:"david",edad:25},
        {nombre:"miguel",edad:28},
        {nombre:"luis",edad:5},
        {nombre:"lucia",edad:26}
    ]
    // ordena el obj por edad
    obj.sort((a,b)=> a.edad - b.edad)
```
* every()
como comparar una lista
```js
    let arr = [1,2,3,4,5,6,71,21,-1,-2,-3,21,21,-4]

    const result = arr.every(valor => valor > 0)
    const result_2 = arr.every(valor => typeof valor === "number")

    // Error asi no se pueden comparar lista
    let r1 = [1,2,3,4]; let r2 = [1,2,3,4] ; let r3 = [1,23,3,4]

    console.log( r1 === r2)

    // como debemos comparar

    const comparacionArr = (r1,r2)=>{
        if(r1.length !== r2.length) return false
        
        const res = r1.every((valor,index)=> valor === r2[index])
        return res
    }

    console.log(comparacionArr(r1,r2)) // true
    console.log(comparacionArr(r1,r3)) // false
```



* some()
identificar si existe un valor en un arr
te devuelve true si almenos uno de los elementos los cumple

```js
    let nume = [1,23,4,6,7,32,21,21,341,31,21,31]
    const res = nume.some(valor=> valor > 0) // true
    const existe = nume.some(valor=> valor === 2) // false

    const obj = [
        {nombre:"emanuel", edad:19},
        {nombre:"david",edad:25},
        {nombre:"miguel",edad:28},
        {nombre:"luis",edad:5},
        {nombre:"lucia",edad:26}
    ]
    const existe_person = obj.some(valor => valor.nombre === "miguel") // true
```
* key()
como obtener una lista a partir de un obj iterable

```js
    const str = "hola soy emanuel"
    const str_arr = Array.from(str)
    const key = array.keys()
    const arr_key = Array.from(key)
```

# Sets

conjunto no ordenado de valores unicos - nunca permite almacenar valores ya existente
la diferencia entre arr y sets es que los set nos permite asegurarnos de que dentro del conjunto los valores no van a estar repetidos

```js
    const arr = [1,2,3,4,5,2,3,4,5,10,"hola",{id:5},{id:5},"hola"]
    const sets = new Set(arr)

    sets.forEach(item=>{
        console.log(item)
    })

    const i_set = sets.values()
```

## Sets metodos
* .add() añade elementos
```js
    const arr = [1,2,3,4,5,2,3,4,5,10,"hola",{id:5},{id:5},"hola"]
    const sets = new Set(arr)
    sets.add("11")
```

* .delete() elimina elementos

```js
    const arr = [1,2,3,4,5,2,3,4,5,10,"hola",{id:5},{id:5},"hola"]
    const sets = new Set(arr)
    sets.detele("hola")
```
* .clear() elemina todos los elementos
```js
    const arr = [1,2,3,4,5,2,3,4,5,10,"hola",{id:5},{id:5},"hola"]
    const sets = new Set(arr)
    sets.clear()
```

* .has() si incluye un valor
```js
    const arr = [1,2,3,4,5,2,3,4,5,10,"hola",{id:5},{id:5},"hola"]
    const sets = new Set(arr)
    sets.has(1))
```

* .size() tamaño del set 
```js
    const arr = [1,2,3,4,5,2,3,4,5,10,"hola",{id:5},{id:5},"hola"]
    const sets = new Set(arr)
    console.log(sets.size)
```

# funciones - se utiliza como bloque de codigo que se ejecuta con un fin especifico

```js   
    const nom = "emanuel"

    function saludar(nombre){
        console.log(`hola ${nombre}`)
    }

    saludar(nom)

    let persona = {nombre:"juan",apellido:"gonzales"}

    function saludarPersona(obj){
        console.log(`hola ${obj.nombre} ${obj.apellido}`)
    }

    saludarPersona(persona)
```
ponemos el parametro por defecto si el usuario no ingresa o pasa el parametro 
```js
    function imprimirNumero(numero = 9){ // parametro por defecto
        console.log(numero)
    }

    imprimirNumero(9)
    imprimirNumero()
```
ponemos parametros con el factor de propagacion
```js   
    function imprimir(...parametro){
        console.log(parametro)
    }

    imprimir(1,2,3,4,5,76,"hola mundo",true)

    function sumar(...num){
        let red = num.reduce((a,b)=> a + b )
    
        return red
    }

    let s = sumar(1,2,3,4,5,677,87)
```

## funciones tipos flechas y anonimas

```js
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const arr_2 = arr.map(valor => valor * 2)

    console.log(arr_2)

    const doble = valor => valor*2
    const doble_valor = valor =>{
        return valor*2
    }
    
    console.log(doble(6))
    console.log(doble_valor(9))
```


## cargar y sobrecarga de funciones

cargar
* 1 - global()
* 2 - saludar() global()   
* 3 - hola() saludar() global()
* 4 - saludar() global()
* 5 - global()

* sobrecarga
```js
    function recursiva(){
        recursiva()
    }
    recursiva()
```

## funciones asincrona y promesas

```js
    const promesa = new Promise((resolve,reject)=>{
        const i = Math.floor(Math.random()*2)
        //si esta todo correcto
        if(i !== 0){
            resolve()
        } else {
            reject()
        }
    })

    promesa
        .then(()=> console.log("se ha ejecutado de forma correcta"))
        .catch(()=> console.log("ha ocurido un error"))
        .finally(()=> console.log("yo me ejecuto siempre"))
```

## funciones generadoras 
```js
    function* generar_id(){
        let id = 0;
        while(true){
            id++       
            if (id > 10) {
                return id
            } 
            yield id // esperando hasta que se vuelva a llamar
        }
    }

    const gem = generar_id();

    console.log(gem.next())
```

# Gestion de Errores con Try y Catch
```js
const miFunction = val =>{
    if(typeof val === "number"){ 
        return 2 * val
    }

    throw new Error("tiene que ingresar un valor tipo number")
}

const numero = "9"

try{
    // ejecuta este codigo que puede fallar
    const doble = miFunction(numero)
    console.log(doble)
} catch(e){
    // en caso que falle ejecuta el catch
    console.error("Error")
    console.error(e)
} finally {
    console.log("esto se va a ejecutar ya sea si esta todo correcto o no")
}
```
# export y import js
- iniciamos en lacarpeta npm init -y le agregamos al json esa linea
```json
    "type": "module",
```
- creamos la carpeta modules(o cualquier nombre) creamos los archivos js y los bloques de codigo que vamos a usar
```js
    // carpeta modules export para exportar nuestro bloque de codigo
    export function suma(a,b){
        return a + b
    }

    export function multiplica(a,b){
        return a*b
    }

    // hacer de cuenta que esta en otro archivo y carpeta
    const getAutor = ()=>{
        return 'acercado todos escuchar la leyenda de chupa chota'
    }
    export const libro = 'acerca de'

    // tambien podemos exportar un bloque de codigo por defecto - solo se puede uno
    export default getAutor
```
- importamos los bloques de codigo en nuestro index.js
```js
    // impota todo el archivo con todos los modulos
    //import * as moduleMatematica from './modulos/matematicas.js
    import getAutor , {libro} from './modulos/literatura.js'
    import { suma , multiplica } from './modulos/matematicas.js'

    const sum = suma(10,20)

    console.log(sum)
```


