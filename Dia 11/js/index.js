function cargar(e) {
  let btn = document.querySelector(".btn");
  btn.style.display = "none";

  let letra = e.key;
  let container = document.querySelector(".container");
  let key = document.querySelector(".key").children[1];
  key.value = e.key;

  let keyCode = document.querySelector(".keyCode").children[1];
  keyCode.value = letra.toUpperCase(e.key).charCodeAt();

  let code = document.querySelector(".Code").children[1];
  code.value = "Key" + letra.toUpperCase(e.key);

  container.style.display = "flex";
}
