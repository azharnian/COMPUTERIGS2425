const inquirer = require('inquirer');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playGame = (numberToGuess, attemptsLeft, min, max) => {
    if (attemptsLeft === 0) {
        console.log(`Sorry, you've run out of attempts! The number was ${numberToGuess}.`);
        return;
    }

    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: `Guess a number between ${min} and ${max} (Attempts left: ${attemptsLeft}):`,
        }
    ]).then(answers => {
        const guess = parseInt(answers.guess);
        
        if (guess === numberToGuess) {
            console.log('Congratulations! You guessed the right number!');
        } else {
            if (guess < numberToGuess) {
                console.log('Too low!');
            } else {
                console.log('Too high!');
            }
            playGame(numberToGuess, attemptsLeft - 1, min, max);
        }
    });
};

const startGame = () => {
    const min = 1, max = 100;
    const numberToGuess = getRandomNumber(min, max);
    const maxAttempts = 10;
    
    console.log('Welcome to the Number Guessing Game!');
    console.log(numberToGuess);
    playGame(numberToGuess, maxAttempts, min, max);
};

startGame();
