

/*Consigne : Écrivez une fonction calculerSomme(tab) qui prend un tableau de nombres
 et retourne 
la somme de tous ses éléments.
Exemple : calculerSomme([5, 10, 15]) ➔ 30.*/


function calculerSomme(tab)
{
    let somme = 0;
    let i = 0;
    while(i < tab.length)
    {
        somme += tab[i];
        i++;
    }
    return somme;
}

let arr = [5, 10, 15];
console.log(calculerSomme(arr));