// Javascript Class

class App{
    constructor(username){
        this.username= username;
        this.users = [];
    }
    getUsername(){
        return this.username;
    }

    getUsers(){
        return this.users;
    }

    addUser(){
        return this.users.push(this.username);
    }


    toString(){
        return this.getUsername();
    }

    static getCity(){
        return "Brussels";
    }
}

let app= new App('John');
console.log(typeof App);
// console.log(app.getUsername());
console.log(app.toString());
app.addUser();
console.log(app.getUsers());
console.log(App.getCity());
