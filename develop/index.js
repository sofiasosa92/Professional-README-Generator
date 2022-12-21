
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer.prompt([
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
        message: "How will install the application?be used?",
    },
    {
        type: "input",
        name: "useInfo",
        message: "How will install the application?be used?",
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
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();