let prompt = require("prompt-sync")();

function nettoyerEspaces(chaine)
{
    let newStr = "";
    let first = 0;
    let end = chaine.length - 1;
    while(chaine[first] === ' ')
    {
        first++;
    }
    while(chaine[end] === ' ')
    {
        end--;
    }
    while(first <= end)
    {
        newStr += chaine[first];
        first++;
    }
    return newStr
}

let chaine = prompt("enter chaine : ");
console.log(nettoyerEspaces(chaine));