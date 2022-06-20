function roll(){
    var firstRoll;
    var secondRoll;
    firstRoll= Math.floor((Math.random())*6)+1;
    secondRoll= Math.floor((Math.random())*6)+1;
    if (firstRoll===secondRoll){
        return (document.getElementById("diceRoll").innerHTML="You have won");
    }else{
        return document.getElementById("diceRoll").innerHTML="Try Again";
    }
}


