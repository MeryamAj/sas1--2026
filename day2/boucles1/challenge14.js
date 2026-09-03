let prompt = require("prompt-sync")();


let nbr = Number(prompt("Enter a number : "));
let i = 1;
let pairs = 0;
let impairs = 0;
while(i <= nbr)
{
    if(i % 2 == 0)
    {
        pairs = pairs + i;
    }
    else
    {
        impairs = impairs + i;
    }
    i++;
}

console.log("Somme des pairs : ",pairs);
console.log("Somme des impairs : ",impairs);