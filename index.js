const fs = require('fs');
const inquirer = require('inquirer');

function generateLogoSVG(color, shape, text) {
    const svgContent = generateSVGContent(color, shape, text);
  return svgContent;
}

function saveSVGToFile(svgContent, filename) {
  fs.writeFile(filename, svgContent, (err) => {
    if (err) {
      console.error('Error saving SVG file:', err);
    } else {
      console.log(`Logo saved to ${filename}`);
    }
  });
}

// Function to start the logo generation process
function generateLogo() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'color',
        message: 'Select a color:',
        choices: ['red', 'blue', 'green'], 
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'square', 'triangle'], 
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo:',
        validate: (input) => input.trim() !== '',
      },
      {
        type: 'input',
        name: 'filename',
        message: 'Enter the filename to save the SVG:',
        default: 'logo.svg',
        validate: (input) => input.trim() !== '',
      },
    ])
    .then((answers) => {
      const { color, shape, text, filename } = answers;
      const svgContent = generateLogoSVG(color, shape, text);
      saveSVGToFile(svgContent, filename);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

generateLogo(); 

function generateSVGContent(color, shape, text) {
    return `
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}" />
  <text x="10" y="50" fill="white">${text}</text>
</svg>`;
}

