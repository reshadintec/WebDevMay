// class Calculator{

//     constructor(number1,number2){
//         this.result=0;
//         this.number1=number1;
//         this.number2=number2;
//     }
//     addition(){
//         return this.result = this.number1 + this.number2;
//     }

//     multiply(){
//         return this.result = this.number1*this.number2;
//     }
//     subtract(){
//         return this.result = this.number1-this.number2;
//     }

//     divide(){
//         return thisresult = this.number1/this.number2;
//     }

//     toString(){
//         console.log(`Result is ${this.result}`);
//     }
// }
// let app = new Calculator(5,2);
// //math operation
// app.addition();
// app.multiply();
// app.toString();

class Calc{
    constructor(number1,number2,operator){
        this.result=0;
        this.number1=number1;
        this.number2=number2;
        this.operator=operator;
    }
    GetResult(){
        switch(this.operator){
            case '+': 
                this.result= this.number1 + this.number2;
            break;
            case '-':
                this.result= this.number1 - this.number2;
                break;
            case '*':
                this.result= this.number1 * this.number2;
                break;
            case '/':
                this.result= this.number1 / this.number2;
                break;
            case '%':
                this.result= this.number1 % this.number2;
                break;
            default: 
            console.log ("Invalid operator");
            this.result= undefined;
        }
    }
    toString(){
        console.log(`${this.number1} ${this.operator} ${this.number2} = ${this.result}`)
    }
}
let app = new Calc (20,10,'+');
app.GetResult();
app.toString();

let app2 = new Calc(10,5,'*');
app2.GetResult();
app2.toString();

let app3 = new Calc(20,13,'-');
app3.GetResult();
app3.toString();

let app4 = new Calc(100,5,'/');
app4.GetResult();
app4.toString();

let app5 = new Calc (10,3,'%');
app5.GetResult();
app5.toString();

let app6 = new Calc (3,1,'^');
app6.GetResult();
app6.toString();