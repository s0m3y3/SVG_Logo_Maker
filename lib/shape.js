class Shapes {
  constructor(text, text_color, shape_name, shape_color) {
    this.shape_name = shape_name;
    this.shape_color = shape_color;
    this.text = text;
    this.text_color = text_color;
  };
  //default SVG will be a triangle shape with 3-provided parameters: shape color, text, text color.
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${this.shape_color}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`;
  //function to set shape color.
  setColor = function(color){
    this.shape_color = color;
  };
  render() {
    return '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
  }
};

//Note: There is a bug with shape color for triangle. Though selected correctly, it may be reflected in logo.svg as "undefined"
class Triangle extends Shapes {
  constructor(text, text_color, shape_name, shape_color){
    super(text, text_color, 'Triangle', shape_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,20 230,180 70,180" fill="${this.shape_color}" />
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`;
  render() {
    return `<polygon points="150,20 230,180 70,180" fill="${this.shape_color}" />`
  };
};

class Square extends Shapes {
  constructor(text, text_color, shape_color){
    super(text, text_color, 'Square', shape_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="110" y="60" width="160" height="160" fill="${this.shape_color}" />
  <text x="190" y="150" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`;
  render(){
    return `<rect x="110" y="60" width="160" height="160" fill="${this.shape_color}" />`
  };
};

class Circle extends Shapes {
  constructor(text, text_color, shape_color){
    super(text, text_color, 'Circle', shape_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${this.shape_color}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`;
  render(){
    return`<circle cx="150" cy="100" r="80" fill="${this.shape_color}" />`;
  };
};

function triangle (text, textcolor,shapecolor){
  const userTriangle = new Triangle(text, textcolor,shapecolor);
  return userTriangle.SVG;
};

function square (text, textcolor,shapecolor){
  const userSquare = new Square(text, textcolor,shapecolor);
  return userSquare.SVG;
};


function circle (text, textcolor,shapecolor){
  const userCircle = new Circle(text, textcolor,shapecolor);
  return userCircle.SVG;
};

//function that finds which shape was selected, then run its function which returns SVG. 
function shapes (text, text_color, shape_name, shape_color){
  if (shape_name.toLowerCase()==="square"){return square(text, text_color,shape_color);}
  else if (shape_name.toLowerCase()==="circle"){return circle(text, text_color,shape_color);}
  else if (shape_name.toLowerCase()==="triangle"){return triangle(text, text_color,shape_color);}
  else {return ""; //future: improve this section.
  };
}

module.exports = {
  shapes,
  Triangle,
  Circle,
  Square,
  Shapes
};