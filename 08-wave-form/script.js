const lables = document.querySelectorAll(".form-control label");

lables.forEach((lable) => {
  lable.innerHTML = lable.innerText
    .split("")
    .map(
      (item, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${item}</span>`
    )
    .join("");
});
