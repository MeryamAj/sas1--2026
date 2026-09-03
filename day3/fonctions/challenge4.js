let prompt = require("prompt-sync")();


function saluerClient(nome, titre)
{
    if(!titre)
    {
        console.log(`Bonjour client ${nome}`);
    }
    else
    {
        console.log(`Bonjour client ${titre} ${nome}`);
    }

}
let nome = prompt("enter nome : ");
let titre = prompt("enter titre : ");
saluerClient(nome,titre);
