const inquirer = require('inquirer');

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

const questions = [
    {
        type: 'input',
        name: 'weight',
        message: 'Enter your weight in kg:',
    },
    {
        type: 'input',
        name: 'height',
        message: 'Enter your height in cm:',
    }
]

inquirer.prompt(questions).then(answers => {
    const weight = answers.weight;
    const height = answers.height;

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    console.log(`Your BMI is ${bmi}`);
    console.log(`You are classified as: ${category}`);
});
