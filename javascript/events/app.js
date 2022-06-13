var number=0;
const inputValue = document.getElementById ("userName");
function clickHandler(event){
     //event.preventDefault()
     number++;
     console.log("Button was clicked my friend", number)
}

function inputHandler(){
    console.log('hello', inputValue.value)
}