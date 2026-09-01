const prompt = require("prompt-sync")();
/*La tension U en volts
L'intensité I en ampères
Le temps t en heures
Énergie = U * I * t
*/
let U = +prompt("La tension U en volts : ");
let I = +prompt("L'intensité I en ampères : ");
let t = +prompt("Le temps t en heure : ");
let energie = U * I * t;
console.log("energie = ",energie, "wh");
