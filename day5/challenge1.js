let prompt = require("prompt-sync")();


function afficherElements(tab)
{
    let i = 0;
    while(i < tab.length)
    {
        console.log(tab[i]);
        i++;
    }
}

afficherElements([10, 20, 30]);


