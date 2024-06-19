import { datos } from "./datos.js";


// Identificamos el elmentos por la clase
const $padre = document.querySelector(".container")

// Creamos un elemento
const nodo = document.createElement("p")

const texto = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quo illo nisi distinctio perspiciatis, labore exercitationem est eum assumenda saepe, illum excepturi recusandae, vel et. Possimus expedita et nemo ut?"

nodo.innerText = texto
$padre.appendChild(nodo)

const nodo2 = document.createElement("p")
const texto2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat!"

const $lista = document.querySelector(" div.container > div.card > ul.list")

console.log($lista)


datos.map(a => {
  let li = document.createElement("li")
  li.innerText = a.name
  li.classList.add("item")
  $lista.appendChild(li)
})


/*
let r = datos.map(a => {
  return a.name
})

for (const leng of r) {
  
}
*/






