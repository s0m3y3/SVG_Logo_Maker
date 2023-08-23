const fs = require('fs');
const inquirer = require("inquirer");
const Shapes = require("./lib/shape.js")

const shapelist = [
    "circle", 
    "triangle", 
    "square", 
];

//this list, is color keyword supported by all web browser. Source: https://www.scaler.com/topics/html-color-names/
const colorKeyword = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgrey",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgrey",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
];

function validateColor(input) {
    input = input.toLowerCase();
    const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i; // Hex color code regex
    if (colorKeyword.includes(input)) {
        // Check if the input is found within colorKeyword array. 
        return true;
    } else if (hexColorRegex.test(input)) {
        // Check if the input is a valid hex color code
        return true;
    }
    return 'Please enter a valid color keyword (no spacing) or a valid hexadecimal color code.';
};

//Array of questions for user input
const questions = [
    {
        type:"input",
        name:"text",
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
        validate: validateColor
    },
    {
        type: "list",
        name: "shape_name",
        message: "Please select the shape for your logo.",
        choices: shapelist
    },
    {
        type: "input",
        name: "shape_color",
        message: "What color would you like your shape to be?",
        validate: validateColor
    },
];

//function that writes to to file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {if(err){console.error(err); return}})
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        console.log(data);
        Shapes(data);
        console.log(Shapes(data));
        // writeToFile("./Assets/logo.svg", Shapes(data));
    });
}

init(); 