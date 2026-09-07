


function filtrerPairs(tab)
{
    let arr = [];
    let i = 0;
    let j = 0;
    
    while(i < tab.length)
    {
        if(tab[i] % 2 == 0)
        {    
           arr[j] = tab[i];
           j++;
        }
        i++;
    }
    return arr;
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6]));