const fs = require('fs');
const inquirer = require("inquirer");
const Shapes = require("./lib/shape.js")

const shapelist = [
    "circle", 
    "triangle", 
    "square", 
]

//Array of questions for user input
const questions = [
    {
        type:"input",
        name:"user",
        message: "Please enter up-to-three characters for your logo.",
        validate: function(input){
            if (input.length >4){
                return 'Please enter up-to-three characters for your logo.';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "text_color",
        message: "What color would you like your text to be?",
    },
    {
        type: "list",
        name: "shape_name",
        message: "Please select the shape for your logo.",
        choices: shapelist,
    },
    {
        type: "input",
        name: "shape_color",
        message: "What color would you like your shape to be?",
    },
];

//function that writes to to file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {if(err){console.error(err); return}})
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("./Assets/logo.svg", Shapes(data));
    });
}

init();