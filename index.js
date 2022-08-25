

function msj_error(val) {
    if(typeof val === "number"){ 
        return 2 * val
    }

    throw new Error("msj personalizado")
}

let n = "9"

try{
    const msj = msj_error(n)
    console.log(msj)
} catch(e){
    console.error(e)
}