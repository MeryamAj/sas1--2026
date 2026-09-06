let prompt = require("prompt-sync")();


function separerMots(chaine)
{
    let arr = chaine.split(" ");
    return arr;
}

let chaine = prompt("Enter chaine : ");
console.log(separerMots(chaine));