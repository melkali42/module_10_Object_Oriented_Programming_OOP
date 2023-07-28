const { Square } = require('../shapes');

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
