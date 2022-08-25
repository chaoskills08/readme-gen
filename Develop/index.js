// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


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
    choices: ['Apache License 2.0', 'MIT', 'Mozilla Public LIcense 2.0'],
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
    },
  ])

  .then((response) => {
    console.log(response)
    const readMe = generateMarkdown(response)
    if (!response.title || !response.detail || !response.install || !response.usage || !response.license || !response.contributors || !response.user) {
        console.log("You missed some fields, please start over")
        return;
    }
    fs.writeFile('readme.md', readMe, (err) => err ? console.log('You missed some fields, please start over') : console.log('README.md created!'))
  }) 
