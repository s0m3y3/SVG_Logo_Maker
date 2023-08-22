class Shapes {
  constructor(shape_name, shape_color, text, text_color) {
    this.shape_name = shape_name;
    this.shape_color = shape_color;
    this.text = text;
    this.text_color = text_color;
  };
  SVG = ``;
  setColor = function(color){
    this.text_color = color;
  };
}

class Triangle extends Shapes {
  constructor(shape_color, text, text_color){
    super('Triangle',shape_color, text, text_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,20 230,180 70,180" fill="${shape_color}" />
  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
  </svg>`;
};

class Square extends Shapes {
  constructor(shape_color, text, text_color){
    super('Square',shape_color, text, text_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="110" y="60" width="160" height="160" fill="${shape_color}" />
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>`;
}

class Circle extends Shapes {
  constructor(shape_color, text, text_color){
    super('Circle',shape_color, text, text_color);
  };
  SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${shape_color}" />
  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
</svg>`;
}

// function Triangle (text, textcolor,shapecolor){
//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <polygon points="150,20 230,180 70,180" fill="${shapecolor}" />
//   <text x="150" y="170" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
// </svg>`
// }

// function Square (text, textcolor,shapecolor){
//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    // <rect x="110" y="60" width="160" height="160" fill="${shapecolor}" />
    // <text x="150" y="170" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
    // </svg>`
// }

// function Circle (text, textcolor,shapecolor){
//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="150" cy="100" r="80" fill="${shapecolor}" />
//   <text x="150" y="170" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
// </svg>`
// }

module.exports = Shapes;
