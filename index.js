const fs = require('fs');
const inquirer = require("inquirer");

const shapes = [
    "circle", 
    "triangle", 
    "square", 
]

//Array of questions for user input
const questions = [
    {
        type:"input",
        name:"user",
        message: "Please enter up-to-three characters for your logo."
    },
    {
        type: "input",
        name: "textcolor",
        message: "What color would you like your text to be?",
    },
    {
        type: "list",
        name: "shape",
        message: "Please select the shape for your logo.",
        choices: shapes,
    },
    {
        type: "list",
        name: "shape",
        message: "What color would you like your shape to be?",
    },
];

//function that writes to README0.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {if(err){console.error(err); return}})
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README0.md", generateMarkdown(data));
    });
}

init();