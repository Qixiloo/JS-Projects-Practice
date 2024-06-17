const imgs = document.querySelectorAll(".panel");

imgs.forEach((img) => {
  img.addEventListener('click', () => {
    removeActiveClasses();
    img.classList.add("active");
  });
});

function removeActiveClasses() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
}
