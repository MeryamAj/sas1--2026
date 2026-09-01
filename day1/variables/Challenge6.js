const prompt = require("prompt-sync")();
let scor_partie_1 = +prompt("scor partie 1: ");
let scor_partie_2 = +prompt("scor partie 2: ");
let scor_partie_3 = +prompt("scor partie 3: ");
let scor_partie_4 = +prompt("scor partie 4: ");
let total = scor_partie_1 + scor_partie_2 + scor_partie_3 + scor_partie_4;
let moyen = total / 4;
console.log("Score total : ",total);
console.log("Moyenne : ",moyen);

