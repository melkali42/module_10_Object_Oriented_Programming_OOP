class Shape {
    constructor(color) {
      this.color = color;
    }

    setColor(colorVar) {
      this.color = colorVar;
    }
  
    render() {
      throw new Error('The render method must be implemented in the child class.');
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="${this.color}" />
      </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" x="10" y="10" fill="${this.color}" />
      </svg>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 90,90 10,90" fill="${this.color}" />
      </svg>`;
    }
  }
  
  module.exports = { Shape, Circle, Square, Triangle };
  