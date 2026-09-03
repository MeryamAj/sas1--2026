let prompt = require("prompt-sync")();

function calculerAgeChien(ageHumain)
{
    let age = ageHumain * 7;
    return age;
}

let Agee = prompt("Enter age : ");
console.log(calculerAgeChien(Agee));

