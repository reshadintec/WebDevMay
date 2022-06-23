class User{
    constructor(username,password){
        this.username = username;
        this.pasword = password; 
        this.users = [];
    }
    getUsers(){

    }
}

class Guest extends User{
    constructor(permission){
        super(username,password,users);
        this.permission = permission;

    }
}

class Admin extends User{
    constructor(username,password,permission){
        super(username,password);
        this.permission = permission
    }
    register(){
        this.users.push({
            username: this.username,
            password: this.pasword,
            permission: this.permission,
        })
    }
}

let app = new Admin("admin", "123", "Granted");
console.log (app);
