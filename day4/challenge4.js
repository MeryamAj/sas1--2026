let prompt = require("prompt-sync")();
function compterVoyelles(chaine)
{
    let i = 0;
    let cmpt = 0;
    while(chaine[i] != undefined)
    {
        if(chaine[i] == 'a' || chaine[i] == 'e' || chaine[i] == 'i' || chaine[i] == 'o' || chaine[i] == 'u' || chaine[i] == 'y')
        {
            cmpt++;
        }
        i++;
    }
    return cmpt;

}

let chaine = prompt("enter chaine : ");

console.log(compterVoyelles(chaine));
