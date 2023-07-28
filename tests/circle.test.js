const { Circle } = require('../shapes');

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
