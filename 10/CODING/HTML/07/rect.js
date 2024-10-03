const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let width, height;

rl.question(`Input width : `, widthInput => {
    width = parseInt(widthInput); // Number
    rl.question(`Input height: `, heightInput => {
        height = parseInt(heightInput);

        const area = width * height;
        console.log(`The area is ${area}`);

        rl.close();
    })
   
})