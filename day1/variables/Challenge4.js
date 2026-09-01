const  prompt = require("prompt-sync")();
// Consommation = (litres / kilomètres) * 100

let kilometres = prompt("Plese enter kilometres : ");
let litres = prompt("Please enter litres : ");
let consommation = (litres / kilometres) * 100;
console.log("Consommation = ",consommation, "L/100 km");
