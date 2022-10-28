// packages
const inquirer = require('inquirer');
const generateHTML= require('./utils/generateHTML');
var fs = require('fs');
var answerArray = [];

// prompts
function init () {
inquirer
  .prompt([
    {
      when: () => answerArray.length > 0,
      type: 'list',
      name: 'addEmployee',
      message: 'Would you like to add any of the following?:',
      choices: ['Engineer', 'Intern',],
    },
    {
      when: () => answerArray.length == 0,
      type: 'input',
      name: 'managername',
      message: 'What is the name of your team manager?',
      
    },
    {
      when: () => answerArray.length > 0,
      type: 'input',
      name: 'name',
      message: 'What is the name of your team member?',
      
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
      when: () => answerArray.length == 0,
    },
    {
      when: (answers) => answers.addEmployee === "Engineer",
      type: 'input',
      name: 'github',
      message: 'What is the engineers github username?',
    },
    {
      when: (answers) => answers.addEmployee === "Intern",
      type: 'input',
      name: 'school',
      message: 'What school does the intern attend?',
    },
    {
      type: 'list',
      name: 'finish',
      message: 'Would you like to add another employee?',
      choices: ['Yes', 'No'],
    },
    
  ])
  .then((answers) => {
    if (answerArray.length == 0) {
      answers['addEmployee'] = 'Manager';
    }
    answerArray.push(answers);
    if ('No' === answers.finish) {
      console.log(answerArray);
      console.log(generateHTML(answerArray));
      writeToFile("EMPLOYEES.html", generateHTML(answerArray));
      console.log('html generated', answerArray);
    }
    else {
      // use class to make employee 
      init();
    }
    console.log(answers);
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