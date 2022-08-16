
// como se declaran y como se utilizan
// se utiliza como bloque de codigo que se ejecuta con un fin especifico

// buscar pasaje por valor y por referencia

const nom = "emanuel"

function saludar(nombre){
    console.log(`hola ${nombre}`)
}

saludar(nom)
saludar()

let nom_2 = "David"

function desperdirse(nombre){
    console.log(`adios ${nombre}`)
}

desperdirse(nom_2)

let persona = {nombre:"juan",apellido:"gonzales"}

function saludarPersona(obj){
    console.log(`hola ${obj.nombre} ${obj.apellido}`)
}

saludarPersona(persona)

function imprimirNumero(numero = 9){ // parametro por defecto
    console.log(numero)
}

imprimirNumero(9)
imprimirNumero()

function imprimir(...parametro){
    console.log(parametro)
}

imprimir(1,2,3,4,5,76,"hola mundo",true)

function sumar(...num){
    let red = num.reduce((a,b)=> a + b )
    
    return red
}

let s = sumar(1,2,3,4,5,677,87)

console.log(s)

function multiplicar(a=0,b=0){
    return a + b
}

console.log(multiplicar(9,2))

// funciones tipos flechas y anonimas

const arr = [1,2,3,4,5,6,7,8,9,10]

const arr_2 = arr.map(valor => valor * 2)

console.log(arr_2)

const doble = valor => valor*2

const doble_valor = valor =>{
    return valor*2
}

console.log(doble(6))
console.log(doble_valor(9))

// cargar y sobrecarga de funciones

function sal(){
    hola()
}

function hola(){
    console.log("hola desde la function hola()")
}

sal()

/**
    1 - global()
    2 - saludar() global()
    3 - hola() saludar() global()
    4 - saludar() global()
    5 - global()
*/

/**
    function recursiva(){
        recursiva()
    }
    recursiva()
*/

// funciones asincrona y promesas

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

//funciones generadoras 

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

