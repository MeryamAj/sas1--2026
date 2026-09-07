

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

function supprimerDoublons(tab)
{
  let i = 0;
  let new_tab = [];
  let j = 0;
  while(i < tab.length)
  {
    if(!(contientElement(new_tab,tab[i])))
    {
        new_tab[j] = tab[i];
        j++;
        
    }
    i++;
  }
  return new_tab;

}
console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 1]))