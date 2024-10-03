const readline = require('node:readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let a, b, c;

rl.question(`Input A : `, aInput => {
    a = parseFloat(aInput);

    rl.question(`Input B: `, bInput => {
        b = parseFloat(bInput);

        rl.question(`Input C: `, cInput => {
            c = parseFloat(cInput);

            const x_one = null;
            const x_two = null;

            console.log(`Your X1 is ${x_one}`);
            console.log(`Your X2 is ${x_two}`);

            rl.close();
        })

    })
})