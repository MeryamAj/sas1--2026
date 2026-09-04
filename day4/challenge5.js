let prompt = require("prompt-sync")();

function estPalindrome(chaine)
{
    let i = 0;
    let last = chaine.length - 1;
    while(chaine[i] = chaine[last])
    {
        if(chaine[i] == chaine[last])
        {
            i++;
            last--;
        }
        else
            return false;
    }
    return true;
}

let chaine = prompt("Enter a chaine : ")
console.log(estPalindrome(chaine));

