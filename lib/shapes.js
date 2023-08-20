class Shape {
  constructor(color) {
    this.color = color;
  }
}

// Circle class inherits properties defined in Shape class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    // Returns polygon with color input
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}

// Triangle class inherits properties defined in Shape class
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    // Returns polygon with color input
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class inherits properties defined in Shape class
class Square extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    // Returns polygon with color input
    return `<rect x="50" y="30" width="200" height="140" fill="${this.color}" />`;
  }
}

// Exports classes (Circle, Triangle, Square)
module.exports = { Circle, Triangle, Square };
