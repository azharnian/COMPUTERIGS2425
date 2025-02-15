const readlineSync = require('readline-sync');

// arrow function
const askName = () => {
    const name = readlineSync.question("What is your name? ");
    return name;
}

// regular function
function askAge()
{
    const age = parseFloat(readlineSync.question('Input your age : '));
    if (age < 30)
    {
        return "Young";
    } else {
        return "Old";
    }
}

const getRandomNumber = function(lower, upper){
    const randomNumber = Math.floor(lower + Math.random() * (upper - lower + 1) );
    return randomNumber;
    
}

// let name = askName();
// console.log(`Hi... ${name}. Nice to meet you.`);

// let age = askAge()
// console.log(`Oh you are ${age} man.`);

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(100, 1000));

const lowerBound = parseInt(readlineSync.question('Input Lower Bound Number : '))
const upperBound = parseInt(readlineSync.question('Input Upper Bound Number : '))
console.log(`Your random number is ${getRandomNumber(lowerBound, upperBound)}`);