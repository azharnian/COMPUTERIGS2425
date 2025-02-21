const readlineSync = require('readline-sync');

const getRandomNumber = function(lower, upper){
    const randomNumber = Math.floor(lower + Math.random() * (upper - lower + 1) );
    return randomNumber;   
}