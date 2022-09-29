class User {
    constructor(username,email){
        this.username = username ;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log('User has logged in');
        return this;
    }

    incScore(){
        this.score +=10;
        console.log(`New Score is ${this.score}`);
        return this;
    }
}

const user1 = new User('ahmad','ahmad@gmail.com');
user1.login().incScore();
const userTwo = new User('Mahmoud','Mahmoud@gmail.com');
userTwo.incScore().login().incScore();
const userThree = new User('Ali','ali@gmail.com');
console.log(user1,userTwo,userThree);
    