
/**
- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

function siempre_true() {
    //console.log(true)
    return true
}

siempre_true()

function* generadora_id() {
    let id = 0;
    while(true){
        yield id += 2
    }
}

//const gem = generadora_id()

//console.log(gem.next())
