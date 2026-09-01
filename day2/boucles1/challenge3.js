const prompt = require("prompt-sync")();
let number = +prompt("Enter a number : ");
let sum = 0;
for(let i = 1 ; i <= number ; i++)
{
    sum = sum + i;
}
console.log("Somme = ",sum);