const prompt = require("prompt-sync")();
let note = prompt("Enter note : ");
if(note < 0 || note > 20)
{
    console.log("note invalide");
}
else if(note >= 10)
{
    console.log("Admis");
}
else
{
    console.log("Non admis");
}