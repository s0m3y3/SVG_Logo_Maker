const Shapes = require("./shape.js")
const shape = new Shapes.Triangle();
shape.setColor('blue');
const expectedSvg = '<polygon points="150,20 230,180 70,180" fill="blue" />';
expect(shape.render()).toEqual(expectedSvg);

// describe('Triangle Class', () => {
//   it('should render the correct SVG with the specified color', () => {
//     const shape = new Triangle();
//     shape.setColor('blue');

//     const expectedSvg = '<polygon points="150,20 230,180 70,180" fill="blue" />';

//     expect(shape.render()).toEqual(expectedSvg);
//   });
// });

// describe('Square Class', () => {
//   it('should render the correct SVG with the specified color', () => {
//     const shape = new Square();
//     shape.setColor('black');

//     const expectedSvg = '<rect x="110" y="60" width="160" height="160" fill="black" />';

//     expect(shape.render()).toEqual(expectedSvg);
//   });
// });

// describe('Circle Class', () => {
//   it('should render the correct SVG with the specified color', () => {
//     const shape = new Circle();
//     shape.setColor('teal');

//     const expectedSvg = '<circle cx="150" cy="100" r="80" fill="teal" />';

//     expect(shape.render()).toEqual(expectedSvg);
//   });
// });