// // let website = "www.google.com";
// // //let website= "www.facebook.com";//
// // website = "www.facebook.com";
// // console.log(website);
// // console.log(user);
// // var user = "root"
// // var username= "ahmad"
// // console.log(username);
// // var a=10;
// // var b=20;
// // b=a+2;
// // var c=a+b;
// // console.log(c);
// var city = "Bru" + "ssel";
// console.log(city);
// var country= 'Brussel\'s Country';
// console.log(country);
// document.getElementById("message").innerText="Don't Disturb"
// document.getElementById("container").innerHTML="<h1> Hello my dear </h1>"
// // var weight=70;
// // var height=174;
// // var bmi=weight/height*height;
// // console.log(bmi);
// // //Net Salary//
// // var bruto=3000;
// // var taxper=0.21;
// // var tax=bruto*taxper;
// // var netto=bruto-tax;
// // console.log(netto);
// // var x=200;
// // var y=10;
// // var z=x % y;
// // console.log(z);
// let result;
// result= "spacex"=="Spacex";
// console.log(result);
// let x = 200;
// let y = 10;
// let z=x % y;
// // console.log(z);
// // result=x<=y ? "Fine" : "Not Fine";
// // console.log(result);
// //jack is 18 . if age is less than 18 no alcohol if jack less than equal 17 drink beer

// let age=17;
// let alcohol=age>18 ? "Enjoy Drinking" : "You can't drink"
// let beer=age>=17 ? "Only beer is allowed" : "You are too young"
// console.log(alcohol);
// console.log(beer)
// let fname="john";

// console.log(`${fname} is my friend`)

// var studentname="Jack"
// var studentage=18;
// let result;
// result=studentage>=18 ? `${studentname} is allowd` : `${studentname} is not allowed`;
// console.log(result);

var temerature = prompt("Please enter temprature", "");
if (temerature>=20) {
    document.getElementById("message").innerText="It is better not to wear a scarf"
}
    else{
        document.getElementById("message").innerText="Consider wearing a warm scarf"
    }