
// funciones factory
// const creaPersonas = (nombre,edad,isDeveloper) => {
//     return {
//         nombre,
//         edad,
//         isDeveloper,
//         saludo: function(){
//             console.log("hola")
//         }
//     }
// }

// const nueva_personas = creaPersonas("emanuel",29,true)

// console.log(nueva_personas)


// instanciar instanceof -> similar a typeof pero para clases
// console.log(nueva_personas instanceof Persona)

class Persona {
    //private -> # solo se pueden haceder desde dentro de la clase 
    #nombre;
    #edad;
    //#obten_edad;
    //protected -> _ solo se puede haceder desde dentro de la clase y desde clase desendiente
    _isDeveloper = true
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludo(){
        console.log(`hola mi nombre es ${this.#nombre} y tengo ${this.#edad} edad`);
    }

    obtenNombre(){
        return this.#nombre
    }

    getEdad(){
        return this.#edad
    }

    setEdad(nueva_edad){
        this.#edad = nueva_edad
    }

    #obten_edad(){
        return this.#edad
    }

}

const persona = new Persona("emanuel",19);

console.log(persona.obtenNombre())

// getter nos permite obtener atributos/metodos
console.log(persona.getEdad())
// setter metodos que nos permite cambiar el valor
persona.setEdad(89)
console.log(persona.getEdad())

// herencia y polimorfismo

class dev extends Persona {
    constructor(nombre,edad,lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }

    saludo(){
        super.saludo()
        console.log(`y soy desarrollador en ${this.lenguaje}`)
    }
}

const nuevo_dev = new dev("emanuel",20,"Java")

nuevo_dev.saludo()