const bg = document.querySelector(".bg");
const text = document.querySelector(".text");

let load = 0;
let time = setInterval(showBg, 100);


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function showBg() {
  load++;

  if (load === 100) {
    clearInterval(time);
  }
  text.innerText = `${load}%`;
text.style.opacity = scale(load, 0, 100, 1,0)

  let blur= scale(load,0,100,100,0)
  bg.style.filter = `blur(${blur}px)`;
}

