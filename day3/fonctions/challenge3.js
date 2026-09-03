let prompt = require("prompt-sync")();

function genererEmail(prenom, nom)
{
    let email = `${prenom.toLowerCase()}.${nom.toLowerCase()}@entreprise.com`;
    return email;
}

let prenom = prompt("Enter your name : ");
let nom = prompt("enter your last name : ");
console.log(genererEmail(prenom,nom));