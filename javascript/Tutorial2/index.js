///Math Objects 
var result;
//PI Number
result= Math.PI;
//round method
result=Math.round(10.6);
result=Math.floor(10.8);
//power method
result=Math.pow(2,5);
//square root
result= Math.sqrt(64);
//Find max number
var arr = [4,6,87,64,34,23,12,78,65,32,12,6,98,3];
result = Math.max(...arr);
// Random Number
result = Math.floor((Math.random()*10));

function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min)
}
result = getRandomNumber(1,10);
console.log(result);


