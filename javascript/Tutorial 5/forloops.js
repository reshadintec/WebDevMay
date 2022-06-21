const student = {
    name: 'John',
    age: 30, 
    isAdmin:false,
    courses: ['html','css','js'], 
    address:{
        city:'Hasselt',
        postcode: 3500
    }
}
// console.log("Result", student['isAdmin]);
///for in 

for(var key in student){
    console.log(student[key])
    if(key==='address'){
        for(var key2 in student[key]){
            console.log(student[key][key2])
        }
    }
    }
    
    function updateData(obj,key,newValue){
        return obj[key] = newValue;
    }
    updateData(student,'name','Peter');
    console.log(student);

    updateData(student,'address',{city:'Brussel',postcode:1780});
    console.log(student);
