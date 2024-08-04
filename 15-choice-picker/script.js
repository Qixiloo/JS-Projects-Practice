const input = document.getElementById("input");
const choices = document.getElementById("choices");

input.focus();

input.addEventListener("keyup", function (e) {
  createTag(e.target.value);
  if (e.key == "Enter") {
    randomSelect();
  }
});

function createTag(value) {
  const tags = value
    .split(",")
    .filter((tag) => tag.trim() != "")
    .map((tag) => tag.trim());

  choices.innerText = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("p");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    choices.appendChild(tagEl);
  });
}

function randomSelect() {
  const interval = setInterval(() => {
    clearHighlight();
    pickRandomNumber();
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    clearHighlight();
    pickRandomNumber();
  }, 3000);
}

function pickRandomNumber() {
  let tags = document.querySelectorAll(".tag");
  let random = Math.floor(Math.random() * tags.length);
  onHighlight(tags, random);
}

function onHighlight(tags, ran) {
  tags[ran].classList.add("highlight");
}

function clearHighlight() {
  let tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => tag.classList.remove("highlight"));
}
