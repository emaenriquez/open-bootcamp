

// estructura de control js

// bifurcaciones 
// son estructura que nos permite elegir decidir si por un camino o otro

// if else

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

// comparaciones

if(5 == 5){
    console.log("igualdad devil");
}

if(5 === 5){
    console.log("5 es muy igual a 5");
}

let a = 5;
let b = 5;

// == solo compara el valor
// === compara el valor y el tipo

if(a == b){
    console.log("igualdad devil");
}

if(a === b){
    console.log("igualdad fuerte")
}

let c = 5;
let d = 4;

/* != diferente solo valor*/
/* !== valor o tipo*/
if( c != d){
    console.log("diferente");
}

if( c !== d){
    console.log("dif");
}

let max = 10
let min = 5 

if(max > min){
    console.log("max > min");
}

if(max >= min){
    console.log("max es mayor o igual");
}

if(min < max){
    console.log("es menor");
}

if(min < max){
    console.log("es menor o igual");
}

// blucles

for(let i = 0;i < 10;i++){
    console.log(i)
}

console.log("---------------")

let lista = [0,1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < lista.length;i++){
    console.log(lista[i])
}

console.log("-----------------")
// for of muestra el valor

for (const iterator of lista) {
    console.log(iterator)
}

console.log("-----------------")

lista.forEach(item => console.log(item))

// for...in

console.log("--------------------")

let person = {
    nombre: "emanuel",
    aprellido: "Enriquez",
    edad:19,
    developer:true
}

console.log(person.nombre)

let prop = "edad"
console.log(person[prop])

for (const propiedad in person) {
    // muestra las propiedades
    console.log(propiedad)
    // muestra el valor
    console.log(person[propiedad])
}

// bucles while

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


// casos especificos - break - continue
console.log("--------------------");

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

console.log("++++++++++++++++++")
// labels

let unidades = 0
let decenas = 0

bucleDecenas: while(true){
    bucleUnidades: while(true){
        console.log(`el numero actual es ${unidades} ${decenas}`)
        unidades++
        if(unidades === 10){
            unidades=0
            break bucleUnidades
        }
        if(decenas === 2){
            console.log(`el numero actual es ${unidades} ${decenas}`)
            break bucleDecenas
        }
    }
    decenas++      
}