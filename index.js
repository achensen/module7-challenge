// TODO: Include packages needed for this application
// const inquirer = import ('inquirer')
import fs from 'fs';

import generateMarkdown from './utils/generateMarkdown.js';

import inquirer from "inquirer";
// import InputPrompt from 'inquirer/lib/prompts/input';
// TODO: Create an array of questions for user input
// const questions = [];

function getQuestions(){

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
      },

      {
        type: 'input',
        message: 'What is the project description?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the project installation instructions?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the project usage information?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the project contribution guidelines?',
        name: 'contribution',
      },
      {
        type: 'list',
        message: 'What are the project license?',
        name: 'license',
        choices: ['MIT','GNU', 'Apache', 'BSD', 'CDDL', 'EPL', 'None'],
      },
      {
        type: 'input',
        message: 'What is your GitHub Name?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },

  ])
  .then((answers) => {
    console.log(answers);
    writeToFile('README.md',answers)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    console.log(error)
  });

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Log created!');
    });    
}
    // TODO: Create a function to initialize app
function init() {
    getQuestions()
}

// Function call to initialize app
init();
