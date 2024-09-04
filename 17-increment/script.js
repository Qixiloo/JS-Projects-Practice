const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));
    const c = Number(counter.innerText);
    const increment = target / 100;
    if (c < target) {
      setTimeout(() => {
        counter.innerText = c + increment;
        updateCounter();
      }, 100);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
