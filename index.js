// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'yourProjectTitle',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?.',
    },
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
