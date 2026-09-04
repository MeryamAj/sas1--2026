let prompt = require("prompt-sync")();

function compterLettre(chaine, lettre)
{
    let i = 0;
    let cmpt = 0;
    while(chaine[i] != undefined)
    {
        if(chaine[i] == lettre)
        {
            cmpt++;
        }
        i++;
    }
    return cmpt;
}

let chaine = prompt("Enter a string : ");
let letter = prompt("Enter character : ");
console.log(compterLettre(chaine,letter));