// console.log("logical operators");
// // OR operator
// var n1=5;
// var n2=10;
// var n3="5"; //string
// var n4="10"; //string

// let result;
// result = (n1 < n2 ) || (n3>n4);
// console.log(result);

// var isUserLoggedIn= true;
// userResult= !isUserLoggedIn;
// console.log(userResult);

// result = 1;
// console.log(result, "type of result: " + typeof(result));

// var student = {
//     sName:"John",
//     age:30,
//     email: "john@example.com",
//     isStudent:false,
//     address:{
//         coutry:"Belgium",
//         city:"brussel",
//         street:"Leopoldplein",
//         zipcode:3500
//     }
// }
// result= `His name is ${student.sName} and he is ${student.age} years old. He is not a student anymore`;
// console.log(result);


//Array Datatypes
var numbers = [1,"a string",true,null,{name:"john"},undefined];
let result=numbers.length;
numbers[1]= "new string"
result = numbers[1];
console.log(result);

//function

console.log("function.js");

function GetSum(){
    
    var getResult = 1+1;
    console.log("Get Sum Function", getResult);
    return 0;              
}
GetSum(); //fuction called back.