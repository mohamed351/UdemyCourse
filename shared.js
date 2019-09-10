var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal');
var buttons = document.querySelectorAll('.plans .btn-plan');
var closeButton = document.querySelector(".closed-button");



for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
      backdrop.style.display ='block';
      modal.style.display='block';
    });
}

closeButton.addEventListener("click",function(){

    backdrop.style.display ='none';
    modal.style.display='none';
});



