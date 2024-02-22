const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title:",

    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project:",

    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instruction for your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project.",
    },

    {
        type: "input",
        name: "contributionGuidelines",
        message: "Please enter contribution guidelines for your project.",
    },
    {
        type: "input",
        name: "testing",
        message: "Please enter test instructions for your project.",
    },
    {
        type: "input",
        name: "userName",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "None"],
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            return console.log(err);

        }else {
            console.log("Success!");
        }
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile('${response.title}.md', response);

});
}

// function call to initialize program
init();
