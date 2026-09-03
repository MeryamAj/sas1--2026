const prompt = require("prompt-sync")();
/*rouge  → Arrêtez-vous
orange → Ralentissez
vert   → Vous pouvez passer*/

const color = prompt("enter a color : ");
switch(color)
{
    case "rouge":
        console.log("Arretez-vous");
        break;
        case "orange":
            console.log("Ralentissez");
            break;
            case "vert":
                console.log("Vous pouvez passer");
                break;
                default:
                    console.log("Couleur invalide");

}
