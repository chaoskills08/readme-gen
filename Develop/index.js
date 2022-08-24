// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
    type: 'input',
    message: 'Please name your application',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Please describe your application in detail',
    name: 'detail',
    },
    {
    type: 'confirm',
    message: 'Do you want a table of contents?',
    name: 'contents',
    },
    {
    type: 'input',
    message: 'Please describe how to install the application',
    name: 'install',
    },
    {
    type: 'input',
    message: 'Please describe how your application will be used',
    name: 'usage',
    },
    {
    type: 'checkbox',
    message: 'Please select a license if one was used',
    choices: ['Apache License 2.0', 'GNU General Public License (GPL)', "GNU Library or General Public License (LGPL)", 'MIT', 'Mozilla Public LIcense 2.0', 'Common Development and Distribution'],
    name: 'license',
    },
    {
    type: 'input',
    message: 'Please list all contributors',
    name: 'contributors',
    },
    {
    type: 'input',
    message: 'Please enter your Github username',
    name: 'user',
    }
  ])

  .then((response) => {
    console.log(response)
    const filename = 'readme'
    fs.writeFile(filename, JSON.stringify(response), (err) => err ? console.log(err) : console.log('success!'))
  }) 
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
