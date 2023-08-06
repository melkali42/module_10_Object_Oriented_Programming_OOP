

const { Circle } = require("./shapes");

describe('Circle', () => {
  test('render() returns the correct SVG string', () => {
    const color = 'blue';
    const circle = new Circle(color);
    const svgString = circle.render();

    const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="${color}" />
    </svg>`;

    expect(svgString).toBe(expectedSVG);
  });
});

const { Square } = require("./shapes");

describe('Square', () => {
  test('render() returns the correct SVG string', () => {
    const color = 'red';
    const square = new Square(color);
    const svgString = square.render();

    const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" x="10" y="10" fill="${color}" />
    </svg>`;

    expect(svgString).toBe(expectedSVG);
  });
});

const { Triangle } = require("./shapes");

describe('Triangle', () => {
  test('render() returns the correct SVG string', () => {
    const color = 'green';
    const triangle = new Triangle(color);
    const svgString = triangle.render();

    const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 90,90 10,90" fill="${color}" />
    </svg>`;

    expect(svgString).toBe(expectedSVG);
  });
});

