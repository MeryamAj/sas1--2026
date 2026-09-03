let prompt = require("prompt-sync")();

let nbr = prompt("enter a number : ");
let n = 2;
let cmpt = 0;
while(n <= nbr / 2)
{
    if(nbr % n == 0)
        cmpt++;
    n++;
}
if(cmpt > 0)
{
    console.log(`${nbr} n'est pas un nombre premier`)
    
}
else
{
     console.log(`${nbr} est un nombre premier.`)
}
