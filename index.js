
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


//terminal messages
console.log("Welcome to my README generator")
console.log("Answwer the following questions to generate a high quality README for your project")

// TODO: Create an array of questions for user input
const questions = () =>
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
            choices: ["Terminal", "other"],
        },
        {
            type: "input",
            name: "usageInfo",
            message: "How will the installed application be used?",
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
                "Apache 2.0",
                "GNU General Public v3.0",
                "MIT",
                "BSD 3",
                "None"
            ],
        },
        {
            type: "input",
            name: "author",
            message: "What is your name?",
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
    ]);


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let badge = "";
    if (data.license == "Apache 2.0") {
        badge = "![Npm package license](https://badgen.net/npm/license/discord.js)"
    } else if (data.license == "GNU General Public v3.0") {
        badge = "https://img.shields.io/badge/license-GNU%20v3.0-blue"
    } else if (data.license == "MIT") {
        badge = "![PyPi license](https://badgen.net/pypi/license/pip/)"
    } else if (data.license == "BSD 3") {
        badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }


return `# ${data.name}  
    
## Table of Contents:
    
* [Description](#Description)
* [Installation](#installation)
* [Usage](#usageInfo)
* [Credits](#Credits)
* [link](#link)
* [License](#license)
* [GitHub](#github)
* [Email](#email)
* [Questions?](#questions)

### Description:
${data.description}
### Installation:
${data.installation}
### Usage:
${data.usageInfo}
### Credits:
${data.credits}
### link:
${data.link}
### License:
${data.license} 
${badge}
### Questions?:
If you have any questions contact me on [GitHub](https://github.com/${data.github}) or contact 
${data.author} at ${data.email}  
     `
}

// TODO: Create a function to write README file
questions()
    .then((data) => writeFileAsync('generatedREADME.md', generateMarkdown(data)))
    .then(() => console.log("Success! You can now preview your README file"))
    .catch((err) => console.log(err));



// // TODO: Create a function to initialize app
