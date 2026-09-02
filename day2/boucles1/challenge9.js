let prompt = require("prompt-sync")();
let base = prompt("enter a number : ");
let Exposant = prompt("enter a number : ");
let i = 0;
let result = 1;
while(i < Exposant)
{
    result = result * base;
    i++;
}
console.log("Result = ",result);