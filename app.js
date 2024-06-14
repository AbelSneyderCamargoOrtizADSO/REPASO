let win = window;
let dom = document;
let body = dom.body;
let forms = dom.forms

let divs = dom.querySelectorAll("div")
let paraf = dom.querySelectorAll("p")
let div = dom.querySelector("div")
let porid = document.getElementById("documento")
let poridnuevo = dom.querySelector("#documento")
let porclase = dom.querySelectorAll(".container")
let atributo = dom.getElementsByName("search")
let oldclass = dom.getElementsByClassName("search")

let items = dom.querySelectorAll("ul.list > li.item")

console.log(win)
console.log(dom)
console.log(dom.doctype)
console.log(dom.head)
console.log(dom.body)
console.log(body.children)
console.log(body.children[1])
console.log(divs)
console.log(div)
console.log(forms)
console.log("images", dom.images)
console.log(paraf)
console.log("Por id",porid)
console.log("Por id nuevo", poridnuevo)
console.log("Por clase", porclase)
console.log("Por atributo", atributo)
console.log("Por old class", oldclass)

console.log("Items", items)



// Pasar a mayuscula el titulo QUE ES API?
const titleapi = dom.getElementById("api")
titleapi.innerText = "QUE ES UN API?"



//

const listaA = [...body.children];
console.log(listaA)

// body.children.map(x => {
//   console.log(x)
// })


// NODOS
console.log(body.childNodes)

// nodos y elementos, hijos, padres, hermano mayor y hermano menor
