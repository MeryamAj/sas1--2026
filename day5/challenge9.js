

// fusionnerTableaux([1, 2], [3, 4]) ➔ [1, 2, 3, 4]
function fusionnerTableaux(tab1,tab2)
{
    let i = 0;
    let new_tab = [];
    let j = 0;
    while(i < tab1.length)
    {
        new_tab[j] = tab1[i];
        j++;
        i++;  
    }
    i = 0;
    while(i < tab2.length)
    {
        new_tab[j] = tab2[i];
        j++;
        i++;  
    }
    return new_tab;

}

console.log(fusionnerTableaux([1, 2], [3, 4]))