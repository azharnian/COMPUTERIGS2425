const readlineSync = require('readline-sync');

const minVal = parseInt(readlineSync.question("Input Lower Bound : "));
const maxVal = parseInt(readlineSync.question("Input Upper Bound : "));

 const randomNumber = Math.floor(Math.random() * (maxVal - minVal) ) + minVal;
//  console.log(randomNumber);

let userInput;
while (true)
{
    userInput = parseInt(readlineSync.question(`Guess the number between ${minVal} and ${maxVal} : `));

    if (userInput < randomNumber)
    {
        console.log("Your number is too low.");
    } else if (userInput > randomNumber)
    {
        console.log("Your number is too high");
    } else 
    {
        console.log("You win!");
        break;
    }
}