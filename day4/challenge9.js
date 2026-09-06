let prompt = require("prompt-sync")();

function nettoyerEspaces(chaine)
{
    let result = chaine.trim();
    return result;
}

let chaine = prompt("enter chaine : ");
console.log(nettoyerEspaces(chaine));