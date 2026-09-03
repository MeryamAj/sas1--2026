let prompt = require("prompt-sync")();

let total= 0;
let cmpt = 0;
do
{
    nbr = Number(prompt("Saisie : "));
    cmpt++;
    total = total + nbr;
}while(nbr != 0)
console.log("Nombre de valeur ",cmpt-1);
console.log("Somme : ", total);