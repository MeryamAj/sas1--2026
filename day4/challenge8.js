let prompt = require("prompt-sync")();


function extraireChaine(chaine, debut, fin)
{
    let result = chaine.slice(0,4);
    return result;
    
}

let chaine = prompt("enter chaine : ");
let debut = Number(prompt("enter debut : "));
let fin = Number(prompt("enter fin : "));

console.log(extraireChaine(chaine, debut, fin));