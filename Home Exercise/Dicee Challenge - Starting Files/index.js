var player1Score=0;
var player2Score=1;
var randomNumber1 = (Math.floor(Math.random()*6)+1);
var randomNumber2= (Math.floor(Math.random()*6)+1); 
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="⛳️ Player 1 Wins";
    player1Score++;
    document.getElementById("player1").innerHTML="Player 1:"+player1Score;
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins ⛳️";
}else{
    document.querySelector("h1").innerHTML="It is a draw";
}
