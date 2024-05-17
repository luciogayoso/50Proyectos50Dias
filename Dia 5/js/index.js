function desenfoque() {
  let porsentaje = document.querySelector(".porsentaje");
  let contenido = document.querySelector(".conteo");
  for (let i = 1; i <= 101; i++) {
    setTimeout(() => {
      porsentaje.innerHTML = i - 1;
    }, 30 * i);
  }
  contenido.style.display = "none";
}
