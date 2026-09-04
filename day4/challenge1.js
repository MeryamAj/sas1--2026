let prompt = require("prompt-sync")();

function compterCaracteres(chaine)
{
    let i = 0;
    while(chaine[i] != undefined)
    {
        i++;
    }
    return i;
}
let str = prompt("Enter a string: ")
console.log(compterCaracteres(str));

