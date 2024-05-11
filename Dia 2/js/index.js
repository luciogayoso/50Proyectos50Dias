function modificarBarra(e) {
  let movimiento = e.target.id;
  let progreso = document.querySelector(".progreso");
  let btnAnterior = document.querySelector("#previo");
  let btnSiguiente = document.querySelector("#siguiente");
  let divControl = document.querySelector(".container-progres");

  if (movimiento == "siguiente") {
    switch (progreso.value) {
      case 0:
        progreso.value = 33;
        divControl.children[2].className = "circulo1";
        btnAnterior.disabled = false;
        break;
      case 33:
        divControl.children[3].className = "circulo1";
        progreso.value = 66;
        break;
      case 66:
        divControl.children[4].className = "circulo1";
        progreso.value = 100;
        e.target.disabled = true;
        break;
    }
  } else if (movimiento == "previo") {
    switch (progreso.value) {
      case 33:
        progreso.value = 0;
        divControl.children[2].className = "circulo";
        e.target.disabled = true;
        break;
      case 66:
        divControl.children[3].className = "circulo";
        progreso.value = 33;
        break;
      case 100:
        divControl.children[4].className = "circulo";
        progreso.value = 66;
        btnSiguiente.disabled = false;
        break;
    }
  }
}
