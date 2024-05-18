function chnangeSize(e) {
  let play = document.querySelector("#play");
  let xbox = document.querySelector("#xbox");

  let xboxClass = document.querySelector(".xbox");
  let playClass = document.querySelector(".play");

  let logo = document.querySelector(".logo");
  console.dir(xbox);
  if (e.target.parentElement.classList[1] === "xbox") {
    e.target.parentElement.style.width = "100%";
    xbox.style.zIndex = "40";
    play.style.zIndex = "10";

    xbox.style.width = "75%";
    logo.style.left = "25%";
    play.style.width = "25%";
  } else if (e.target.parentElement.classList[1] === "play") {
    e.target.parentElement.style.width = "100%";
    play.style.zIndex = "40";
    xbox.style.zIndex = "10";

    play.style.width = "75%";
    xbox.style.width = "25%";
    logo.style.left = "75%";
  }
}

function volverElementos() {
  let play = document.querySelector("#play");
  let xbox = document.querySelector("#xbox");
  let logo = document.querySelector(".logo");

  play.style.width = "50%";
  xbox.style.width = "50%";
  logo.style.left = "50%";
}
