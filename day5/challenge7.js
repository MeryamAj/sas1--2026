


function filtrerPairs(tab)
{
    let arr = [];
    let i = 0;
    let res = 0;
    while(i < tab.length)
    {
        if(tab[i] % 2 == 0)
        {
            res = (tab[i]);
            arr += res
        }
        i++;
    }
    return arr;
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6]));