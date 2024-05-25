let joke = document.querySelector("#joke");
let jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", generarJoke);

generarJoke();

async function generarJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  joke.innerText = data.joke;
}
