

function contientElement(tab, valeur)
{
    let i = 0;
    while(i < tab.length )
    {
        if(tab[i] === valeur)
        {
            return true
        }
        i++;
    }
    return false;
    
}

let arr = ["pomme", "banane"];
console.log(contientElement(arr,"banane"));