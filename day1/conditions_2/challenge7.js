let prompt = require("prompt-sync")();


let choice = Number(prompt("Enter your choice : "));
switch(choice)
{
    case 1: 
    console.log("Compte courant");
    console.log("frais : 20 DH");
    break;
    case 2:
        console.log("Compte épargne");
        console.log("frais : 10 DH");
        break;
        case 3:
            console.log("Compte étudiant");
            console.log("frais : 0 DH");
            break;
            case 4:
                console.log("Compte professionnel");
                console.log("frais : 50 DH")
                break;
                default:
                    console.log("Unvalide");

}