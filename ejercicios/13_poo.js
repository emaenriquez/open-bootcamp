
class Estudiante{
    constructor(nombre,asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    getDatos(){
        console.log(`mi nombre es ${this.nombre} y mis asignaturas son ${this.asignaturas}`)
    }
}

const nuevo_estudiante = new Estudiante('emanuel',['javaScript','html','css'])
const nuevo_estudiante_2 = new Estudiante('david',['javaScript','html','css'])
const nuevo_estudiante_3 = new Estudiante('gonalez',['javaScript','html','css'])


nuevo_estudiante.getDatos()