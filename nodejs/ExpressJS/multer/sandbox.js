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

class Admin extends User{
    constructor(username,email,title){
        super(username,email);
        this.title=title;
    }
    deleteUser(user){
        users = users.filter((u)=>{
            return u !== user;
        })
    }
}

const user1 = new User('ahmad','ahmad@gmail.com');
user1.login().incScore();
const userTwo = new User('Mahmoud','Mahmoud@gmail.com');
userTwo.incScore().login().incScore();
const userThree = new User('Ali','ali@gmail.com');
console.log(user1,userTwo,userThree);
const admin = new Admin('Reshad','admin@admin.com')
let users = [user1,userTwo,userThree,admin];
console.log(users);
admin.deleteUser(user1);
console.log(users);
const userFour = new User('Arsenal','arsenal@ar.com');
console.log(users);

const newAdmin = new Admin('New Admin','admin@ad.com','super admin');
newAdmin.login().incScore();
console.log(newAdmin);
