// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Default implementation, will be overridden later
  get getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  get getArea() {
    const { width, height } = this;
    return width * height;
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  get getArea() {
    const { width, height } = this;
    return (width * height) / 2;
  }
}

const rectangle = new Rectangle(12, 6);
console.log("Area of Rectangle =", rectangle.getArea);

const triangle = new Triangle(10, 14);
console.log("Area of Triangle =", triangle.getArea);
