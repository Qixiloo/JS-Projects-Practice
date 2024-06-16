const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll', scrollAction);

scrollAction()

function scrollAction(){
let height=window.innerHeight / 5 * 4;

boxes.forEach(box=>{
let target=box.getBoundingClientRect().top

if(target<height){
 box.classList.add('show')
}else{

box.classList.remove('show')
}

});


}