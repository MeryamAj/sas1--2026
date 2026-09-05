let prompt = require("prompt-sync")();

function repeterChaine(chaine, fois)
{
    let newchaine = "";
    let i = 0;
    let j ;
    while(i < fois)
    {
        j = 0;
        while(chaine[j] != undefined)
        {
            newchaine = newchaine + chaine[j];
            j++;
        }
        i++;
    }
    return newchaine;
}

let chaine = prompt("Enter chaine : ");
let fois = Number(prompt("enter a number : "));
console.log(repeterChaine(chaine,fois));