// --------------- seleccionar elementos
// este selecciona por id
const paraffo = document.getElementById('viewport')

paraffo.style.color="red"

// este selecciona por la etiqueta
const tag = document.getElementsByTagName('p')
// este selecciona por el nombre de la clase
const items_contenedor = document.getElementsByClassName('link')

// ------- querySelector -------
// este selecciona por el primer elemento del documento
let element = document.querySelector('*')

// este selecciona todos los elementos del cocumento
let elements = document.querySelectorAll('*')

// este selecciona el primer elemento que encuentra
const heading = document.querySelector('h1')

// este selecciona todos los elementos 
const heading_2 = document.querySelector('h2')

heading_2.classList.replace("heading_2","heading_1")

// este selecciona por clase
const note = document.querySelector('.link')

// este selecciona todos los elementos por clase
const notes = document.querySelectorAll('.link')

// este selecciona por id 
const logo = document.querySelector('#logo')

// este selecciona por grupo
const grupo = document.querySelector('div')

const parent = document.querySelector('notes')
// muestra el padre del elemento


const input = document.querySelector('input')

//document.write(input.value)

const contenedor = document.querySelector('.main')

for (let i = 0; i < 20; i++) {   
    //const text_elemento = document.createTextNode("hola mundo desde javascript")
    const elemento = document.createElement('p')
    
    elemento.innerHTML = "hola mundo js"
    contenedor.appendChild(elemento)
}

const contenedor_link = document.querySelector('.contenedor_link')
// selecciona el primer elemento hijo de un padre
const primer_elemento = contenedor_link.firstElementChild
// selecciona el utimo elemento hijo de un padre
const ultimo_elemento = contenedor_link.lastElementChild

//console.log(primer_elemento)
//console.log(ultimo_elemento)

const lista = document.querySelector('.mylist')

lista.removeChild(lista.firstElementChild)

const element_li = document.createElement('li')

const text_li = document.createTextNode('varsil')

element_li.appendChild(text_li)

lista.replaceChild(element_li,lista.childNodes[0])


const el = document.querySelector('.element')

const element_next = el.nextElementSibling
const element_subling = el.nextSibling

/*
setTimeout(function(){
    console.log('Hola Mundo')
},2000)*/

//console.log('setTimeout ejemplo')

function saludar(){
    console.log('Hola como estas')
}

//setTimeout(saludar(),1000)

const time = setTimeout(function(){
    console.log("hola desde javascript")
},3000)

clearTimeout(time)

//console.log(`el tiempo de espera id ${time} ha sido limpiado`)

const titulo1 = document.querySelector('.titulo')

function clickTitulo(event){
    console.log(event.target)
}

titulo1.addEventListener('click',clickTitulo)

document.addEventListener('DOMContentLoaded',()=>{
    console.log('el documento se ha cargado')
})



const form = document.getElementById('formulario')

const enviar_formulario = (e) => {
    e.preventDefault();
    const {name,Email,contraseña} = e.target
    console.log(name.value , Email.value, contraseña.value)
}

form.addEventListener('submit',enviar_formulario)

const section = document.getElementById('section')
const titulo_2 = document.getElementById('titulo')

titulo_2.addEventListener('click', (event)=>{
    console.log(event.bubbles,event.cancelBubble)
    event.stopPropagation()
    console.log('click en el titulo')
})

section.addEventListener('click',(event)=>{
    console.log('click en la section')
})

