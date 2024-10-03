const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What's your name? `, name => {
    console.log(`Hi ${name}!`);
    rl.question(`How old are you? `, age => {
        console.log(`Now, you are ${age} years old.`);
        rl.close();
    })

    
});