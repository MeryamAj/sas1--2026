

function trouverMax(tab)
{
    let i = 1;
    let max = tab[0];
    while(i < tab.length)
    {
        if (max < tab[i])
        {
            max = tab[i];
        }
        i++;
    }
    return max;
}
let arr = [12, 45, 89, 7, 23];
console.log(trouverMax(arr));