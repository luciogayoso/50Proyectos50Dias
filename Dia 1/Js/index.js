function seleccionar(e) {
  let div = e.target;
  let h1 = e.target.childNodes[0];
  let divHermanos = e.target.parentElement.children;
  for (let i = 0; i < divHermanos.length; i++) {
    divHermanos[i].style.width = "200px";
    divHermanos[i].style.backgroundSize = "100% 100%";
    divHermanos[i].children[0].style.display = "none";
  }

  div.style.width = "3000px";

  setTimeout(function () {
    div.style.backgroundSize = "95% 95%";
  }, 1200);

  setTimeout(function () {
    h1.style.display = "block";
  }, 1000);
}
