const prompt = require("prompt-sync")();
let nbr = +prompt("Enter a number : ");
if(nbr > 0)
{
    console.log("Le nombre est positif");
}
else if(nbr < 0)
{
    console.log("Le nombre est negatif");
}
else
{
    console.log("Le nombre est egal a zero.")
}
