function calculateCircleArea(radius) {
  return radius * radius * Math.PI;
}

function calculateRectArea(width, height) {
  return width * height;
}

class Circle {
  // #변수명 은 private하게 사용할 수 있다. 외부에서 접근 불가능 getter를 사용해 외부로 드러낼 수 있다.
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  // getter를 사용해 속성으로서 외부로 들어내고 있다.
  get radius() {
    return this.#radius;
  }

  area = () => this.#radius * this.#radius * Math.PI;
}

class Rect {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  // getter를 사용해 속성으로서 외부로 드러내고 있다.
  get width() {
    return this.#width;
  }

  // getter를 사용해 속성으로서 외부로 드러내고 있다.
  get height() {
    return this.#height;
  }

  area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(calculateCircleArea(circle.radius));
console.log(calculateRectArea(rect.width, rect.height));

console.log(circle.area());
console.log(rect.area());
