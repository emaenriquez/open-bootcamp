


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

// Errores mas comunes

// InternalError , SyntaxError , TypeError , RageError y ReferenceError

// gestion de rejistro

