function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
    var remainAge = 90-age;
    var days = Math.round(remainAge*365);
    var weeks = Math.round(remainAge*52);
    var months= Math.round(remainAge*12);
    console.log("You have "+ days +" days, "+weeks+" weeks, "+months+" months left.");        
        
    /*************Don't change the code below**********/
    }
    lifeInWeeks(56);