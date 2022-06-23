class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    constructor (name,age,role){
        super(name,age);
        this.role = role;

    }
}

class Teacher extends Person{
    constructor(name,age,role){
        suer(name,age);
        this.role = role;
    }
}


let Student1= new Student ("John", 20 , "Student");
let Student2 = new Student ("Mehdi ", 25 , "Student")
console.log(Student1);