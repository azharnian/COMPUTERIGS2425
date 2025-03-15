/* versi 1
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What's your name?`, name => {

    console.log(`Hi ${name}!`);

    rl.question(`How old are you? `, age => {

        console.log(`Wow... you are ${age} years old awesome!`);
        rl.close();
    })

});


const readlineSync = require('readline-sync');

const name = readlineSync.question("What is your name? ");
console.log(`Hi ${name}!`);

const age = parseInt(readlineSync.question('Input your age : '));
console.log(`Your age is ${age}`);

*/

const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name? ",
        default: 'Budi'
    },
    {
        type: 'input',
        name: 'age',
        message: 'How old are you?',
        default: '10'
    }
];

inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
    });