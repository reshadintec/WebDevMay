// // function lifeInWeeks(age) {
    
// //     /************Don't change the code above************/    
// //     var remainAge = 90-age;
// //     var days = Math.round(remainAge*365);
// //     var weeks = Math.round(remainAge*52);
// //     var months= Math.round(remainAge*12);
// //     console.log("You have "+ days +" days, "+weeks+" weeks, "+months+" months left.");        
        
// //     /*************Don't change the code below**********/
// //     }
// //     lifeInWeeks(56);

// //     ////BMI Calculator Function
// //     function bmiCalculator(weight,height){
// //         var bmi = Math.round( weight / (height*height) );
// //         return bmi;
// //     }
// //     console.log(bmiCalculator(73,1.75));
    
// // ////
// // var myCvInfo = [
// //     {
// //         fullName:"Ahmad Hassani",
// //         userName:"Ahmad.hassani",
// //         email:"reshadh@email.cojm",
// //         phone:"9933232",
// //         profession:"software developer",
// //         address:{
// //             city:"brussel",
// //             street:"leopopld"
// //         },
// //         skills:['pyton','photoshop','javascript'],
// //         education:[
// //             {
// //                 school:'Azkaban School',
// //                 year:'2010',
// //                 degree:'high school',
// //             },
// //             {
// //                 school:'programing',
// //                 year:"2015",
// //             }
// //         ]
// //     }

// // ]
// function fibonacciGenerator (n) {
// //Do NOT change any of the code above 👆
    
//     //Write your code here:
//   var output=[];
//   if(n===1){
//       output=[0];
//   }else if(n===2){
//       output=[0,1];
//   }else{
//       output = [0,1];
//       for(var i=2;i<n;i++){
//           output.push(output[output.length-2] + output[output.length-1]);
//       }
//   }
    
//     return output;
    
    
    
//     //Return an array of fibonacci numbers starting from 0.
    
// //Do NOT change any of the code below 👇
// }
// output=fibonacciGenerator(10);
// console.log(output);

var names= ["Reshad","Ahmad", "Meysam","Mahmoud","kalbi"];
function whosPaying(names){

var noOfPeople= names.length;
var randomPos= Math.floor(Math.random()*noOfPeople);
var payingPerson=names[randomPos];
return payingPerson;
}

var selected = whosPaying(names);
console.log(selected);