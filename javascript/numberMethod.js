// const Result = document.getElementById("result");
// var userinput =prompt( "Enter a number");
// console.log(typeof userinput);
// Result.innerText=userinput;
// var x=10;
// console.log(typeof x);
// var x=prompt("Enter your first number");
// var y=prompt("Enter your 2nd number");
// (Number.isNaN(x)&&Number.isNaN(y))?z:console.log("You didn't enter a number");
// var z=parseInt(x)+parseInt(y);
// alert("The sum of two numbers is: "+z);
var x=prompt("Enter a number");
var y=prompt("Enter your second number");
var result=parseInt(x) && parseInt(y);
var z=parseInt(x)+parseInt(y);
result!=NaN ?console.log("The sum of two number is " +z):"You didn't enter an actual number"

