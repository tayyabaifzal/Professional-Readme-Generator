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
        name: "github",
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
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Check current file directory for files!"));
};


// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        // console.log(data);
        const filename = path.join(process.cwd(), "README-generated.md");
        writeToFile(filename, generateMarkdown.generateMarkdown(data));


    });
};

// function call to initialize program
init();
