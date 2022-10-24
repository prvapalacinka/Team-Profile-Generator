// packages
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');

// prompts
function init () {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project/repository?',
      
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      
    },
    {
      type: 'input',
      name: 'github_username',
      message: 'What is your github username?',
      
    },
    {
      type: 'input',
      name: 'additionalquestions',
      message: 'How can a user reach you about any additional questions?',
      
    },
    {
      type: 'input',
      name: 'github_link',
      message: 'What is your github project link?',
      
    },
  ])
  .then((answers) => {
    console.log(answers);
    writeToFile("NEWREADME.md", generateMarkdown(answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log (["Couldn't be rendered in the current environment"]);
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log (["Something else went wrong"]);
      // Something else went wrong
    }
  });
}

// function that writes HTML file: 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => console.log(err))
  };

init ();