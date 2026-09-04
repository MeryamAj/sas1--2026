let prompt = require("prompt-sync")();

function inverserChaine(chaine)
{
    let i = chaine.length - 1;
    let newchaine = "";
    while(i >= 0)
    {
        newchaine = newchaine + chaine[i];
        i--;
    }
    return newchaine;
}
let chaine = prompt("enter a chaine : ");
console.log(inverserChaine(chaine))