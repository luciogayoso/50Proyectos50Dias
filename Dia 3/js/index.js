function rotar(e) {
  let contenido = document.querySelector("#contenidoCambio");
  let itemMenu = document.querySelector(".item");
  if (e.target.attributes[2].value == "img/icons8-menú-50.png") {
    contenido.className = "contenido2";
    contenido.style.animation = "rotacion 2s ease-in";
    itemMenu.style.animation = "aparecer 3s ease-in";
    e.target.src = "img/close.png";
  } else if (e.target.attributes[2].value == "img/close.png") {
    contenido.className = "contenido";
    itemMenu.style.animation = "desaaparecer 3s ease-in";
    contenido.style.animation = "rotacionReversa 2s ease-in";
    e.target.src = "img/icons8-menú-50.png";
  }
}
