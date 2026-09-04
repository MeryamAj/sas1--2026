let prompt = require("prompt-sync")();
let nbr = Number(prompt("enter a number : "));
let n = 0;
let newnbr = 0;
let result = 0;

while(nbr > 0)
{
    n = nbr % 10;
    newnbr = newnbr * 10 + n;
    result = parseInt(newnbr);
    nbr = nbr / 10;
    nbr = parseInt(nbr)
}
console.log(result)



