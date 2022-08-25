
// import { suma ,nombre } from './modulos/matematicas.js'

import * as moduleMatematica from './modulos/matematicas.js'
import getAutor , {libro} from './modulos/literatura.js'

const sum = moduleMatematica.suma(10,20)

console.log(sum)

console.log(moduleMatematica.nombre)

console.log(getAutor())

console.log(libro)