const prompt = require("prompt-sync")();
/*
Montant commande :
Frais livraison :
Total à payer :

Montant < 100 DH → livraison 30 DH
Montant entre 100 DH et 299 DH → livraison 20 DH
Montant entre 300 DH et 499 DH → livraison 10 DH
Montant >= 500 DH → livraison gratuite


*/

let montant = +prompt("Enter montant : ")
if(montant < 100)
{
    let livrasion = 30;
    let total = montant + livrasion;
    console.log("Total = ", total);
}
else if (montant >= 100 && montant <= 299)
{
    let livrasion = 20;
    let total = montant + livrasion;
    console.log("Total = ", total);
}
else if (montant >= 300 && montant <= 499)
{
    let livrasion = 10;
    let total = montant + livrasion;
    console.log("Total = ", total);
}
else
{
    let livrasion = 0;
    let total = montant + livrasion;
    console.log("Total = ", total);
}



