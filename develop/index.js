
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

console.log("Welcome to my README generator")
console.log("Answwer the following questions to generate a high quality README for your project")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Hello! What is the title of your README?",
    },
    
    {
        type: "input",
        name: "description",
        message: "What was the application made for?",
    },
    {
        type: "list",
        name: "installation",
        message: "How will install the application?",
        choices:["Terminal", "other"]
    },
    {
        type: "input",
        name: "usageInfo",
        message: "How will the installed  application be used?",
    },
    {
        type: "input",
        name: "credits",
        message: "Who contributed to this project?",
    },
    {
        type: "input",
        name: "link",
        message: "What is the deployment link?",
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using?",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause Simplified License",
            "BSD 3-Clause New or Revised License",
        ],
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your gitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your E-mail?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! You can now preview your README file");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response)
    })
}

// Function call to initialize app
init();