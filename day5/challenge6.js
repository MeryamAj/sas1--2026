
function inverserTableau(tab)
{
    //let rev = tab.reverse();
    //return rev;

    let i = 0;
    let temp = 0;
    let end = tab.length - 1;
    while(i < end)
    {
        temp = tab[end];
        tab[end] = tab[i];
        tab[i] = temp;
        i++;
        end--;

    }
    return tab;
}

let arr = [1, 2, 3, 4, 5 , 6];
console.log(inverserTableau(arr));