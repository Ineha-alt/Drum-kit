for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var buttoninnerhtml=this.innerHTML;
     makesound(buttoninnerhtml);
     buttonanimation(buttoninnerhtml);
    });
}

document.addEventListener("keypress",function(event){
   makesound(event.key);
   buttonanimation(event.key);

});

function makesound(key){
 switch (key) {
      case "w":
         var tom1 = new Audio("../sound/tom-1.mp3");
         tom1.play();
         break;
       case "a":
         var tom2 = new Audio("../sound/tom-2.mp3");
         tom2.play();
         break; 
      case "s":
         var tom3 = new Audio("../sound/tom-3.mp3");
         tom3.play();
         break; 
      case "d":
         var tom4 = new Audio("../sound/tom-4.mp3");
         tom4.play();
         break;
       case "j":
         var snare = new Audio("../sound/snare.mp3");
         snare.play();
         break; 
      case "k":
         var crash = new Audio("../sound/crash.mp3");
         crash.play();
         break; 
      case "l":
         var kick= new Audio("../sound/kick-bass.mp3");
         kick.play();
         break;
      default:console.log(buttoninnerhtml);
         break;
     }
}
function buttonanimation(currentkey)
{
   var activebutton=document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");
   setTimeout(function(){activebutton.classList.remove("pressed");},100);
}