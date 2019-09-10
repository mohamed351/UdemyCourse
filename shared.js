var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal');
var buttons = document.querySelectorAll('.plans .btn-plan');
var closeButton = document.querySelector(".closed-button");

console.dir(backdrop);
console.dir(buttons);
console.dir(closeButton);

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
      backdrop.style.display ='block';
      modal.style.display='block';
    });
}




