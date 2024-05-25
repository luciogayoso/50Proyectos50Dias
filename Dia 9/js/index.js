function sonido(e) {
  let identificador = "#" + e.target.textContent;
  let pista = document.querySelector(identificador);
  let grupoPistas = pista.parentElement.children;

  for (let i = 0; i < grupoPistas.length; i++) {
    if (grupoPistas[i].id != pista.id) {
      grupoPistas[i].pause();
      grupoPistas[i].currentTime = 0;
    }
  }
  pista.play();
}
