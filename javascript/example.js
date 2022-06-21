// const student={
//     name:"John Dalton",
//     age:25,
//     education:"Software Developer",
//     project:['a','b','c','d'],
//     print: function(){
//         console.log("It is just a parint function")

// const { Tooltip } = require("bootstrap")

//     }
// }
// student.print()
// console.log("testing")
///

// const tools{
//     bmiCal:function(weight, height){
//         let bmi=weight/(height*height)
//         console.log("BMI Result is "+bmi)
//     }
//     nettoSalary:function(salary,tax){
//         let netSalary= salary - ((salary*tax)/100)
//         console.log("Net salary is: "+netSalary)
//     }
// }
// tools.bmiCal(75,1.75)
// tools.nettoSalary(2500,21)

const computer = {
    screen:"Apple",
    keyboard:"Logitech",
    mouse:"Stealth",
    cpu:"AMD",
    gpu:"RTX 3090",
    power:false,
    turnon:function(){
        computer.power= true;
        console.log("Computer is turning on");
        console.log(`
        Screen: ${computer.screen}
        Keyboard: ${computer.keyboard}
        mouse: ${computer.mouse}
        CPU:${computer.cpu}
        GPU:${computer.gpu}
        `) 
    },
    turnOff:function(){
        computer.power=!computer.power;
        console.log("Computer is turning off");
        console.log(`
        Screen: ${computer.screen}
        Keyboard: ${computer.keyboard}
        mouse: ${computer.mouse}
        CPU:${computer.cpu}
        GPU:${computer.gpu}
        `) 
    },
    status:function(){
        const computerStatus= computer.power ? "Computer is running":"Computer is off";
        console.log(computerStatus)
    }
}
computer.turnon();
computer.turnOff();
console.log("HI");

