const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name? ",
    default: 'Budi'
  },
  {
    type: 'list',
    name: 'list_question',
    message: 'What programming language do you like? ',
    choices: ['Javascript', 'Python', 'Java', 'C++'],
    default: 'Javascript',
  },
  {
    type: 'checkbox',
    name: 'checkbox_question',
    message: 'What programming language do you like? ',
    choices: ['Javascript', 'Python', 'Java', 'C++'],
    default: 'Javascript',
  }
];

inquirer.prompt(questions)
  .then(answers => {
    console.log(answers);
  });