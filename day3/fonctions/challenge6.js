let prompt = require("prompt-sync")();

function verifierMotDePasse(motDePasse)
{
    size = motDePasse.length;
    if(size >= 8 && motDePasse.includes("@"))
        return true;
    else
        return false;

}
let motepass = prompt("Enter a password : ");
console.log(verifierMotDePasse(motepass))