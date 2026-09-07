const prompt = require("prompt-sync")(); 

let user = {
    username : prompt("Enter username : "),
    age : Number(prompt("enter age : ")),
    city : prompt("enter city : "),
    statuus : prompt("Enter status : "),
}

console.log(user.username);
console.log(user.age);
user.age = Number(prompt("Modifier age : "));
user.statuus = prompt("Modidier status : ");
user.email = prompt("enter un email : ");
console.log(user);