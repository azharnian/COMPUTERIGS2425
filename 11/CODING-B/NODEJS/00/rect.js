const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let length;
let width;

rl.question('Enter the length of the rectangle: ', answerLength => {
    length = parseFloat(answerLength);
    rl.question('Enter the width of the rectangle: ', answerWidth => {
        width = parseFloat(answerWidth);
        const area = length * width;
        console.log(`The area of the rectangle is ${area}`);
        rl.close();
    });
});