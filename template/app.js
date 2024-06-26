import { comentarios } from "./modulo.js";

const $root = document.querySelector("#root")
const $plantilla = document.querySelector("#plantilla").content;

const $fragment = document.createDocumentFragment();
const $section = document.createElement("section")
$section.classList.add("cards")

/*
comentarios().then(lista => {
  lista.forEach(comentario => {
    $plantilla.querySelector("div > h2").textContent = `${comentario.id} - ${comentario.name}`;
    $plantilla.querySelector("div > div > p").textContent = comentario.email;
    $plantilla.querySelector("div > div > p ~ p").textContent = comentario.body;

    $plantilla.querySelector("div").classList.add("card")

    const $clon = document.importNode($plantilla, true)

    $fragment.appendChild($clon)
  });

  $section.appendChild($fragment)
  $root.appendChild($section)

})
*/

comentarios().then(lista => {
  lista.forEach(comentario => {
    $plantilla.querySelector("div > h2").textContent = `${comentario.id} - ${comentario.name}`;
    $plantilla.querySelector("div > div > p").textContent = comentario.email;
    $plantilla.querySelector("div > div > p ~ p").textContent = comentario.body;

    $plantilla.querySelector("div").classList.add("card")

    const $clon = document.importNode($plantilla, true)

    $fragment.appendChild($clon)
  });

  $section.appendChild($fragment)
  $root.appendChild($section)

})
