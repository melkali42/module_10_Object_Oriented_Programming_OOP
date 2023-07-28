const { Triangle } = require('../shapes');

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
