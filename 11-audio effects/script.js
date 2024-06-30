const buttons = document.querySelector(".button");
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach((sound) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;

  button.addEventListener("click", () => {
    stopSongs();
    let audio = document.getElementById(sound);
    audio.play();
  });
  buttons.appendChild(button);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
