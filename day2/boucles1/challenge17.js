let prompt = require("prompt-sync")();
let nbr;
do
{
    nbr = Number(prompt("Enter a positive number : "));

}while(nbr < 0)

let cmpt = 0;
while(parseInt(nbr) > 0)
{
    nbr = nbr / 10;
    cmpt++;
}
console.log("Nombre de chiffres : ",cmpt);
