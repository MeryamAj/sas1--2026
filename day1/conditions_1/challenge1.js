const prompt = require("prompt-sync")();
let age = prompt("Enter your age : ");
if(age >= 18)
{
    console.log("Accès autorisé");
}
else
{
    console.log("Accès refusé");
}