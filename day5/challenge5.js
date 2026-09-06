

function contientElement(tab, valeur)
{
    if(tab.includes(valeur))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let arr = ["pomme", "banane"];
console.log(contientElement(arr,"banane"));