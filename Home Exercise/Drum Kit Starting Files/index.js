var numOfDrumBtns = document.querySelectorAll(".drum").length;
console.log(numOfDrumBtns);
for(var i=0;i<numOfDrumBtns; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    console.log(this.innerHTML);
    this.style.color = "white";
    
})

}
// var sound= new Audio("sounds/tom-1.mp3");
//     sound.play();