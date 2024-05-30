let textarea = document.createElement("textarea");
let spanContainer = document.querySelector("#tags");
textarea.focus();

function cargarSpan(e) {
  let valores = e.target.value;
  let arrayValues = valores.split(",");

  for (let i = 0; i < arrayValues.length; i++) {
    let spanExistente = existe(spanContainer, i);
    if (spanExistente == false && arrayValues[i] != "") {
      let span = document.createElement("span");
      span.className = "tag";
      span.id = i;
      span.innerText = arrayValues[i];
      spanContainer.appendChild(span);
      console.dir(arrayValues[i]);
    } else if (spanExistente == true) {
      let span = document.getElementById(i);
      span.innerText = arrayValues[i];
    }
  }
}

function existe(array, id) {
  for (let i = 0; i < array.children.length; i++) {
    if (array.children[i].id == id) {
      return true;
    }
  }
  return false;
}
