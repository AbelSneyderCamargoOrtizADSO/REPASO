import { post } from "./modulo.js";

const $root = document.querySelector("#root")

const btn = document.createElement("button")
btn.textContent = "Solicitar nuevo"
btn.setAttribute("id", "agregar")

const container = document.createElement("section")
container.classList.add("container")

const form = document.createElement("form")
const input = document.createElement("input")
// const $fragment = document.createDocumentFragment();

btn.setAttribute("type", "submit")

$root.appendChild(form)
form.appendChild(input)
form.appendChild(btn)
$root.appendChild(container)


const agregarPost = () => {
  // let id = parseInt(prompt("Ingrese el identificador"))
  event.preventDefault();
  let id = input.value

  if (input.value == "") {
    console.error("FORMULARIO VACIO")
    input.classList.add("error")

  } else if (isNaN(input.value)) {
    console.error("SOLO SE PERMITEN NUMEROS")
    input.classList.add("error")

  } else if (Number(input.value)) {
    input.classList.add("sucess")

    post(id).then(response => {
      console.log(response)

      const div = document.createElement("div")
      const title = document.createElement("h2")
      const body = document.createElement("p")

      title.textContent = `${response.id} - ${response.title}`
      body.textContent = response.body

      div.appendChild(title)
      div.appendChild(body)

      container.insertBefore(div, container.firstChild)
    })
  }

  // container.appendChild($fragment)
}

const validarIngreso = () => {
  if (isNaN(input.value)) {
    input.classList.add("error")
    input.classList.remove("sucess")
  } else if (Number(input.value)) {
    input.classList.add("sucess")
    input.classList.remove("error")
  } else if (input.value === "") {
    input.classList.remove("sucess")
    input.classList.remove("error")
  }
}


form.addEventListener("submit", agregarPost)
input.addEventListener("keypress", validarIngreso)



