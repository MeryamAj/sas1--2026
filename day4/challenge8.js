let prompt = require("prompt-sync")();


function extraireChaine(chaine, debut, fin)
{
    let result = "";
    let i = debut;
    let end = fin;
    while(i < end)
    {
        result +=chaine[i]
        i++;
    }
    return result;
    
}

let chaine = prompt("enter chaine : ");
let debut = Number(prompt("enter debut : "));
let fin = Number(prompt("enter fin : "));

console.log(extraireChaine(chaine, debut, fin));