const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const input = document.querySelector(".text");


button.addEventListener("click", () => {
  container.classList.toggle("active");
  input.focus();
  console.log(container.classList);
});
