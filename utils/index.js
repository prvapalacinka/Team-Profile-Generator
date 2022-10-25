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
      message: 'What is the name of your team manager?',
      
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'What is your employee ID?', 
      
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      
    },
    {
      type: 'input',
      name: 'officenumber',
      message: 'What is your office number?',
      
    },
    {
      type: 'list',
      name: 'addEmployee',
      message: 'Would you like to add any of the following?:',
      choices: ['Engineer', 'Intern', 'No, finish building my team'],
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