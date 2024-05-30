function cambiar(e) {
  console.dir(e.target.parentElement.parentElement);
  let img = e.target;
  let divBox = e.target.parentElement.parentElement;
  let p = divBox.children[0].children[1];

  if (divBox.className == "box") {
    img.src = "img/cerrar.png";
    p.style.display = "block";
    divBox.className = "boxActive";
  } else if (divBox.className == "boxActive") {
    img.src = "img/abrir.png";
    p.style.display = "none";
    divBox.className = "box";
  }
}
