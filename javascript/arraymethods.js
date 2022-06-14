//array methods
var result;
var myArr=[];
var myNumber = [5,1,10,2,3,6,91,28];
var myLetters = ['a','c','j','f','z','d'];

//push method
myArr.push(1)
myArr.push("a")
myArr.push(true)
myArr.push(null)
myArr.push({name:"john"})


//pop method   it removes the last item
myArr.pop();

//shift method it removes the first element
myArr.shift();

//join method
result=myArr.join("-")

//sort method
result= myLetters.sort();
result= myNumber.sort(function(a,b){
    return a-b  //b-a if you wanna display the largest number first
})

//concat method
result=myNumber.concat(myLetters);

// //iteration method

// for(var i=0;i<result.length;i++)
// {
// console.log(result[i])
// }

// result.forEach(function(value,index,arrayitself){
//     console.log(value,index,arrayitself)

// })

// var total = 0;
// for(let i=0; i<myNumber.length; i++){
//     total+=myNumber[i];
//     console.log(total);
// }

let sum=0;
myNumber.forEach(sumFunction);
function sumFunction(item){
    sum+=item;
}
console.log(sum);