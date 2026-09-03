let prompt = require("prompt-sync")();


let nbr ;
let secret = 37;
do
{
    nbr = prompt("Tentative : ");
    if(nbr > secret)
    {
        console.log("Trop grand");
    }
    else if (nbr < secret)
    {
        console.log("Trop petit");
    }
    else
    {
        console.log("Bravo !");
    }
    
    
}while(nbr != secret);
