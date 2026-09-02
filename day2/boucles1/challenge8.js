let prompt = require("prompt-sync")();
let number = prompt("Enter a number : ");
let i = 1;
let score = 100;
while(i <= number)
{
    console.log(`Mission ${i} → Score : ${score}`)
    score = score + 100;
    i++;

}
