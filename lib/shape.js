class Shapes {
  constructor(text, text_color, shape_name, shape_color) {
    this.shape_name = shape_name;
    this.shape_color = shape_color;
    this.text = text;
    this.text_color = text_color;
  };
  //default SVG will be a square shape with 3-provided parameters: shape color, text, text color. 
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="110" y="60" width="160" height="160" fill="${shape_color}" />
  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
  </svg>`;
  //function to set shape color. 
  setColor = function(color){
    this.shape = color;
  };
}

class Triangle extends Shapes {
  constructor(text, text_color, shape_name, shape_color){
    super(text, text_color, 'Triangle', shape_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,20 230,180 70,180" fill="${shape_color}" />
  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
  </svg>`;
};

class Square extends Shapes {
  constructor(text, text_color, shape_color){
    super(text, text_color, 'Square', shape_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="110" y="60" width="160" height="160" fill="${shape_color}" />
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>`;
}

class Circle extends Shapes {
  constructor(text, text_color, shape_name, shape_color){
    super(text, text_color, 'Circle', shape_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${shape_color}" />
  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
</svg>`;
}

function triangle (text, textcolor,shapecolor){
  const userTriangle = new Triangle(text, textcolor,shapecolor);
  return userTriangle.SVG;
}

function square (text, textcolor,shapecolor){
  const userSquare = new Square(text, textcolor,shapecolor);
  return userSquare.SVG;
}

function circle (text, textcolor,shapecolor){
  const userCircle = new Circle(text, textcolor,shapecolor);
  return userCircle.SVG;
}

function shapes (text, text_color, shape_name, shape_color){
  // this.shape_name = shape_name;
  // this.shape_color = shape_color;
  // this.text = text;
  // this.text_color = text_color;
  if (shape_name.toLowerCase()==="square"){
    square(text, text_color,shape_color);
  } else if (shape_name.toLowerCase()==="circle"){
    circle(text, text_color,shape_color);
  } else if (shape_name.toLowerCase()==="triangle"){
    triangle(text, text_color,shape_color);
  };
}

module.exports = {
  shapes
};
