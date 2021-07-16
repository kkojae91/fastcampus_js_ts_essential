interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

// 추상매소드를 사용하기 위해선 추상 클래스를 선언 해야한다. abstract
// abstract class는 이 클래스를 상속받은 하위 클래스(자식 클래스)한태 반드시 실체적인 코드를 구현하라고 지시하는 역할을 합니다.
abstract class Shape {
  // static 속성은 인스턴스객체에 포함되지 않는 shape class에 연결되어 있는 속성을 의미한다.
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;

  // readonly는 인스턴스 객체가 만들어진 이후에 인스턴스 객체 외부에서 값을 바꿀 수 없는 속성을 의미한다.
  public readonly name: string = "shape";
  // protected는 자식요소까지 접근 가능 외부로는 공개 되지 않는다.
  protected _borderWidth: number;
  // private는 shape class 안에서만 사용 가능 자식요소 역시 사용 불가능
  // !느낌표를 사용하면 값을 작성하지 않아도 된다는 지시어입니다. (자주 사용하지 않는다.)
  private action!: string;

  constructor(borderWidth: number = 0) {
    this._borderWidth = borderWidth;
  }

  // abstract 매소드는 abstract class일 경우만 사용할 수 있는 기능
  // 추상클래스의 추상매소드가 있는 경우는 반드시 자식 클래스에서 반드시 실체화된 코드로 구현해야한다.
  abstract area: () => number;

  set borderWidth(width: number) {
    if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
      this._borderWidth = width;
    } else {
      throw new Error("borderWidth 허용 범위를 벗어난 동작을 시도했습니다.");
    }
  }

  get borderWidth(): number {
    return this._borderWidth;
  }
}

class Circle extends Shape {
  private _radius: number;
  // 부모가 가지고 있는 속성을 재정의 하면 오버라이딩이 된다.(덮어씌운다.)
  public name: string = "Circle";

  constructor(radius: number) {
    // super(); 를 입력해줘야 부모의 생성자가 작동하게 됩니다.(Shape 클래스의 생성자가 작동!)
    super();
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  // 부모의 추상 매소드를 실제 구현하는 코드 무조건 실체화된 코드를 구현해줘야한다.
  area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();

    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
  rect.borderWidth = 10;
  console.log(rect.borderWidth);
} catch (e) {
  console.error(e);
}

// 설계도로써 Container라는 interface를 사용할거라는 의미 implements를 사용해야합니다.
// interface로 MyContainer class는 이러이러한 모양이라는 것을 알려주는 것 (Cotainer interface에 정의해 놓은 요소가 빠지게 되면 빨간줄이 뜬다.)
class MyContainer implements Container {
  // implements를 사용해도 private과 같은 내부에서만 사용되는 것에는 적용되지 않는다.
  // private name: string;
  tagName: string;
  className: string;

  constructor(tagName: string, className: string) {
    this.tagName = tagName;
    this.className = className;
  }

  getTagName = () => this.tagName;

  getClassName = () => this.className;
}

console.log("done");
