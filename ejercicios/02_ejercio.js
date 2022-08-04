
/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

let nombre = "Emanuel";
let edad = 19;
let desarrollador = true;
let fechaNacimiento = new Date(2003,03,17);

const libroFavorito = {
    titulo: "Harry Potter",
    autor: "jk rowling",
    fecha: new Date(1997,06,26),
    url: "https://es.wikipedia.org/wiki/Harry_Potter_y_la_piedra_filosofal"
}