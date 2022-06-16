var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:2,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:3,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:4,
        name:'joe',
        course:'python',
        score:70
    }
]

// whoPassedExam?
function whoPassedExam(param){
    return param.filter(value=>value.score>60 && value.id>3)

}

console.log(whoPassedExam(_students))

function isLeap(a) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        
        if(a%4!=0){
            return "Not leap year.";
        }
        if(a%4==0 && a%100!=0){
            return "Leap year.";
        }
        if(a%4==0 && a%100==0 && a%400==0){
            return "Leap year.";
        }
        if(a%4==0 && a%100==0 && a%400!=0){
            return "Not leap year.";
        }

        
   
    /**************Don't change the code below****************/    
    
    }
    // var x=isLeap(2000);
    console.log(isLeap(2028));


    ////
    var guestList=["ahmad","mahmood","kalbi","maqsood"];
    var guestName = prompt("What is your name?");
    if(guestList.includes(guestName)){
        console.log("Get in "+guestName+", the party is about to begin");
    }else{
        console.log("Sorry can't open the door, you are not in the list");
    }
