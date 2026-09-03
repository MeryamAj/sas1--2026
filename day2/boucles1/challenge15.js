let prompt = require("prompt-sync")();

let nbr = prompt("Enter a number : ");
let somme = 0;
for(let i = 1 ; i < nbr; i++)
{
    if(nbr % i == 0)
    {
        somme += i;
    }

}
if(somme == nbr)
{
    console.log(`${nbr} est un nombre parfait.`)
}
else
{
    console.log(`${nbr} no un nombre parfait.`)

}