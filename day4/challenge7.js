let prompt = require("prompt-sync")();


function remplacerCaractere(chaine, ancien, nouveau)
{
  let i = 0;
  let new_chain = "";
  while(chaine[i] != undefined)
  {
    if(chaine[i] == ancien)
    {
        new_chain += nouveau
    }
    else
    {
      new_chain += chaine[i];
    }
    i++;
  }
  return new_chain;
}


let chaine = prompt("Enter a string : ");
let ancien = prompt("Enter a character : ");
let nouveau = prompt("Enter a character : ");

console.log(remplacerCaractere(chaine,ancien,nouveau));