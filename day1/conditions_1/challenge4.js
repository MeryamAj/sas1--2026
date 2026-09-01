const prompt = require("prompt-sync")();
let montante = +prompt("enter a montant: ");
if(montante >= 500)
{
    let livraison = 0;
    console.log("Livraison gratuite");
    let total = montante + livraison;
    console.log("Total a payer ", total, "Dh");
}
else
{
    let livraison = 40;
    console.log("Frais de livraison");
    let total = montante + livraison;
    console.log("Total a payer ", total, "Dh");
}

