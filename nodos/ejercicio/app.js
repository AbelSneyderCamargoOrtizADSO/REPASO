import { data } from "./datos.js";


const $fragment = document.createDocumentFragment();
const container = document.querySelector(".container")
const cards = document.createElement("div")
cards.classList.add("cards")

data.map(obj => {
  // console.log(obj)

  // CREAMOS LOS ELEMENTOS
  const card = document.createElement("div")
  const card_header = document.createElement("div")
  const card_title = document.createElement("h2")
  const card_body = document.createElement("div")
  const card_paragraph = document.createElement("p")
  const card_img = document.createElement("img")
  const button = document.createElement("a")
  const button_text = document.createElement("span")
  const button_icon = document.createElement("i")


  // AGREGAMOS ATRIBUTOS
  card_img.setAttribute("src", obj.src)

  // AGREGAMOS TEXTO
  card_title.innerText = obj.title
  card_paragraph.innerText = obj.paragraph
  button_text.innerText = "Saber más"


  // AGREGAMOS CLASES
  card.classList.add("card")
  card_header.classList.add("card__header")
  card_title.classList.add("card__title")
  card_body.classList.add("card__body")
  card_paragraph.classList.add("card__paragraph")
  card_img.classList.add("card__img")

  button.classList.add("button", "button--outline")
  button_text.classList.add("button__text")
  button_icon.classList.add("bx", "bxs-chevron-right", "button__icon")

  //
  cards.appendChild(card)

  card.appendChild(card_header)
  card.appendChild(card_body)

  card_header.appendChild(card_title)

  card_body.appendChild(card_paragraph)
  card_body.appendChild(card_img)
  card_body.appendChild(button)
  button.appendChild(button_text)
  button.appendChild(button_icon)


  // AGREGAMOS AL FRAGMENTO
  $fragment.appendChild(cards)
})

container.appendChild($fragment)


/*
data.map(obj => {
  // console.log(obj)

  let div = document.createElement("div")

  div.innerHTML = `
    <div class="card__header">
      <h2 class="card__title">
        ${obj.title}
      </h2>
    </div>
    <div class="card__body">
      <img src="${obj.src}" class="card__img" alt="img">
      <p class="card__paragraph">
        ${obj.paragraph}
      </p>
      <a href="#" class="button">
        <span class="button__text">Saber más</span>
        <i class='bx bxs-chevron-right button__icon'></i>
      </a>
    </div>
  `

  div.classList.add("card")

  container.appendChild(div)
})
*/