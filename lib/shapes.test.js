const Shapes = require("./shape.js")

describe('Triangle Class', () => {
  it('should render the correct SVG with the specified color', () => {
    const shape = new Shapes.Triangle();
    const color = "teal";
    shape.setColor(color);

    const expectedSvg = `<polygon points="150,20 230,180 70,180" fill="${color}" />`;
    expect(shape.render()).toEqual(expectedSvg);
  });
});

describe('Square Class', () => {
  it('should render the correct SVG with the specified color', () => {
    const shape = new Shapes.Square();
    const color = "yellow";
    shape.setColor(color);

    const expectedSvg = `<rect x="110" y="60" width="160" height="160" fill="${color}" />`;
    expect(shape.render()).toEqual(expectedSvg);
  });
});


describe('Clircle Class', () => {
  it('should render the correct SVG with the specified color', () => {
    const shape = new Shapes.Circle();
    const color = "$ff0001";
    shape.setColor(color);

    const expectedSvg = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    expect(shape.render()).toEqual(expectedSvg);
  });
});