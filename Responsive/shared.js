var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal');
var buttons = document.querySelectorAll('.plans .btn-plan');
var closeButton = document.querySelector(".closed-button");
var toggleButton = document.querySelector(".toggle-button");
var mobilenav = document.querySelector(".mobile-nav");


if(backdrop){
  backdrop.addEventListener("click",function(){
    let opensModel = document.querySelectorAll(".open-model");
    for (let index = 0; index < opensModel.length; index++) {
      opensModel[index].classList.remove("open-model");
      
    } 

  });
}

if(buttons)
{
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",open);
}
}
if(closeButton)
{

closeButton.addEventListener("click",close);
}

if(toggleButton){
toggleButton.addEventListener("click",function(){
  mobilenav.classList.add("open-model");
  backdrop.classList.add("open-model");
});
}


function open(){
  if(backdrop){
  backdrop.classList.add("open-model");
  }
  if(modal){
  modal.classList.add("open-model");
  }
}
function close(){
  if(backdrop){
  
  backdrop.classList.remove("open-model");
  }
  if(modal){
  modal.classList.remove("open-model");
  }
}



