const fs = require("fs");

const path = require("path");

const inquirer = require("inquirer");

const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "TEXT: max to (3) Characters of SVG:",
  },
  {
    type: "input",
    name: "textColor",
    message: "TEXT COLOR: a color keyword (OR a hexadecimal number):",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "SHAPE COLOR: a color keyword (OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "SHAPE: a shape of SVG: ",
    choices: ["Circle", "Triangle", "Square"],
  },
];

function writeToFile(filename, data) {
  let shape;
  switch (data.shape) {
    case "Circle":
      shape = new Circle(data.shapeColor);
      break;
    case "Triangle":
      shape = new Triangle(data.shapeColor);
      break;
    case "Square":
      shape = new Square(data.shapeColor);
      break;
  }
  //generate the svg tag using all information we collected
  const svgElement = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
    data.textColor
  }">${data.text}</text>
</svg>`;
//write the svg data to file based on text name
  fs.writeFile(
    path.join(__dirname, "./examples", filename),
    svgElement,
    (err) => {
      err ? console.log(err) : console.log(`Generating ${data.text}.svg`);
    }
  );
}

function init() {
  inquirer.prompt(questions).then((data) => {
    if (data.text.length > 3) {
      console.log("Must enter a text no more than 3 characters");
      init();
    } else {
      // Calling write file function to generate SVG file
      writeToFile(`${data.text}.svg`, data);
    }
  });
}

init();
