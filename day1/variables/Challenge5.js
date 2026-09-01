const prompt = require("prompt-sync")();
/*Moins de 60 minutes → Court métrage
De 60 à 120 minutes → Film standard
Plus de 120 minutes → Film long*/
let duree = prompt("Plese enter duree : ")
if (duree < 60)
{
    console.log("Court métrage");
}
else if (duree >= 60 && duree <= 120)
{
    console.log("Film standard");
}
else
{
    console.log("Film long");
}

