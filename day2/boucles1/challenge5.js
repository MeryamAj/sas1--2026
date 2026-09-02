let prompt = require("prompt-sync")();
let N = Number(prompt("Enter a number : "));
let X = Number(prompt("Enter a number : "));
let total = 0;
let result = 0;
for(let i = 1 ; result < N ; i++)
{
    result = X * i;
    console.log(result);
    total = total + result;
    
}
console.log("Result = ", total);