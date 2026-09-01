const prompt = require("prompt-sync")();
// Note finale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10
let noteCC = +prompt("enter controle continu : ");
let noteprojet = +prompt("enter note projet :  ");
let noteExamen = +prompt("enter note examen : ");
let notfinal = (noteCC * 2 + noteprojet * 3 + noteExamen * 5) / 10;

console.log("note final = ", notfinal);
