// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'yourProjectTitle',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description1',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'description2',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'description3',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'description4',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'who are your collaborators github profiles.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'which license would you like to use?.',
      choices: [
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License"
      ]
    },
    {
      type: 'input',
      name: 'feature1',
      message: 'What features is in this project?',
    },   {
      type: 'input',
      name: 'feature2',
      message: 'Any onther feature?',
    },   {
      type: 'input',
      name: 'feature3',
      message: 'Any other feature?',
    },
  ]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        console.log(answers)
        const myReadme = generateMarkdown(answers);

        fs.writeFile("./output/README.md", myReadme, () => {
          console.log("File has been successfully created!")
        })
        
      })
}

// Function call to initialize app
init();
