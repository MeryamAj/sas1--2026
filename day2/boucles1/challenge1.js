const prompt = require("prompt-sync")();
let number = +prompt("enter a number : ");
for(let i = 1 ; i <= number ; i++)
{
    console.log(i);
}