function twitterApp ( userName , email , password){
    this.userName = userName;
    this.email = email;
    this.password = password; 
}

let user1 = new twitterApp("ahmadhassani" , "ahmad13881@hotmail.com" , "123456");
console.log (user1);
twitterApp.prototype.showInfo = function(){
    console.log (`Username: ${this.userName} \nEmail: ${this.email}\nPassword: ${this.password}\nnewValue: ${this.newValue}` )
}
twitterApp.prototype.newValue = "Lorem";
twitterApp.prototype.updatePassword= function(newPassword){
    return this.password = newPassword;
}
user1.updatePassword("48322");
// console.log(user1);
user1.showInfo();