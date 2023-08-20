// Importing Triangle, Square, Circle classes from ./shapes.js
const { Circle, Triangle, Square } = require("./shapes.js");

// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Circle test", () => {
  it("test for a circle with a white background", () => {
    const shape = new Circle("white");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="90" fill="white" />'
    );
  });
});

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle test", () => {
  it("test for a triangle with a blue background", () => {
    const shape = new Triangle("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Unit testing -> testing for a square with a purple background to render
describe("Square test", () => {
  it("test for a square with a black background", () => {
    const shape = new Square("black");
    expect(shape.render()).toEqual(
      '<rect x="50" y="30" width="200" height="140" fill="black" />'
    );
  });
});
