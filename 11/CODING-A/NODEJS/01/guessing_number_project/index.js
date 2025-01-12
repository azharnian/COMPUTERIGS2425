const inquirer = require('inquirer');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playGame = (numberToGuess, attemptsLeft) => {
    if (attemptsLeft === 0) {
        console.log(`Sorry, you've run out of attempts! The number was ${numberToGuess}.`);
        return;
    }

    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: `Guess a number between 1 and 100 (Attempts left: ${attemptsLeft}):`,
        }
    ]).then(answers => {
        const guess = answers.guess;
        
        if (guess === numberToGuess) {
            console.log('Congratulations! You guessed the right number!');
        } else {
            if (guess < numberToGuess) {
                console.log('Too low!');
            } else {
                console.log('Too high!');
            }
            playGame(numberToGuess, attemptsLeft - 1);
        }
    });
};

const startGame = () => {
    const numberToGuess = getRandomNumber(1, 100);
    const maxAttempts = 10;
    
    console.log('Welcome to the Number Guessing Game!');
    playGame(numberToGuess, maxAttempts);
};

startGame();
