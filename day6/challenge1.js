const prompt = require("prompt-sync")();

let student = {
    firstName : prompt("enter name : "),
    lastName :prompt("enter lastName : "),
    age : Number(prompt("enter age : ")),
    city : prompt("enter your city : "),
    shcool : prompt("enter school : "),
}
console.log(`${student.firstName} ${student.lastName} a ${student.age} ans et habit a ${student.city}`);