function buscar(e) {
  let buscar = document.querySelector("#buscar");
  if (buscar.className == "buscarClass") {
    buscar.className = "buscarClassOpen";
  } else if (buscar.className == "buscarClassOpen") {
    buscar.className = "buscarClass";
  }
}
