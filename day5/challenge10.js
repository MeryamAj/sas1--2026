
function trierTableau(tab)
{
    let i = 0;
    let j = 0;
    let temp = 0;
    while(i < tab.length )
    {
        j = 0;
        while(j < tab.length - 1 - i)
        {
            if(tab[j] > tab[j + 1])
            {
                temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
            j++;

        }
        i++;
    }
    return tab;
}

console.log(trierTableau([5, 3, 8, 1, 2]));