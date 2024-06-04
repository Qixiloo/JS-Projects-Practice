let process = document.getElementById("process");
let circles = document.querySelectorAll(".circle");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let length = circles.length;

let currentIndex = 0;
next.addEventListener("click", () => {
  if (currentIndex === length - 1) {
    currentIndex = length - 1;
  } else {
    currentIndex++;
  }

  update();
});

prev.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = 0;
  } else {
    currentIndex--;
  }


  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index === currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

process.style.width=currentIndex*(100/3)+'%'

if(currentIndex===0){
prev.disabled=true
}

else if(currentIndex===length-1){
next.disabled=true
}

else{
prev.disabled=false
next.disabled=false

}

}




