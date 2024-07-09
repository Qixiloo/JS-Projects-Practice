const jokeText = document.getElementById("joke");
const jokeButton = document.getElementById("btn");

fetchJoke();
jokeButton.addEventListener("click", fetchJoke);

async function fetchJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  //   const response = await fetch("https://icanhazdadjoke.com", config);
  //   const data = await response.json();
  //   jokeText.innerText = data.joke;

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeText.innerText = data.joke;
    });
}
