let prompt = require("prompt-sync")();
/* switch / case
Challenge 6 : Mois de l'année
L'utilisateur saisit un numéro de mois.

1  → Janvier
2  → Février
3  → Mars
...
12 → Décembre
Utilisez switch / case pour afficher le nom du mois.

Bonus :

Afficher également le nombre de jours du mois.*/

let month = Number(prompt("Enter number of month : "))
switch(month)
{
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
        case 3:
        console.log("March");
        break;
        case 4:
        console.log("April");
        break;
        case 5:
        console.log("May");
        break;
        case 6:
        console.log("June");
        break;
        case 7:
        console.log("July");
        break;
        case 8:
        console.log("August");
        break;
        case 9:
        console.log("September");
        break;
        case 10:
        console.log("October");
        break;
        case 11:
        console.log("November");
        break;
        case 12:
        console.log("December");
        break;
        default:
            console.log("unvalide number ");
        
}