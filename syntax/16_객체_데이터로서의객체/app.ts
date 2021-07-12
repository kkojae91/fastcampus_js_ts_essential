type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  color?: string;
  ["className"]?: string;
};

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: "red",
};

// return 값의 type은 Box
function makeBox(width: number, height: number, borderRadius: number, backgroundColor: string): Box {
  // 속성명과 변수의 이름이 값을 경우 (key === value)일 경우 생략해서 작성할 수 있다.
  return {
    width,
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, "blue");

class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(width: number, height: number, borderRadius: number, backgroundColor: string) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, "blue");

// class를 사용해서 인스턴스객체를 생성하게 되면 어떤 class에서 생성된 인스턴스객체인지 확인할 수 있다.
// 다른 함수나 다른 class에서 생성된 객체는 이 조건문을 통과 하지 못합니다.
if (boxShape instanceof Shape) {
  console.log(boxShape);
}

box.borderWidth = 10;
// 위의 표현과 아래의 표현은 문법상 다르지만 하는 행동은 동일하다.
box["className"] = "box rounded";

// JS에서는 그냥 새로운 속성명에 값을 넣어주면 객체 안에 속성이 추가 된다.(객체의 동적 바인딩)
// TS에서는 정의한 객체를 찾아가 color?: string; optional로 지정을 해줘야 오류 없이 실행된다.
box.color = "blue";

// 속성을 삭제하고 싶을땐 delete연산자를 활용하면 제거할 수 있습니다.
// TS에서는 optional이 아닌 속성을 삭제하려고 하면 오류가 발생한다.
delete box.color;

// 객체는 참조 타입 절대로 원본이 변경되지 않는다.
const box1 = box;
// Object.assign({}, box) 빈 객체에 box를 추가해준다. 참조가 아닌 복사된 객체가 return된다.
// Object.assgin({}, box, box1, box2, box3) 빈 객체에 box, box1, box2, box3의 객체를 모두 combine시켜준다.
// box와 box2는 다른곳을 가르킨다. (복사)
const box2 = Object.assign({}, box);
// Object.assign과 동일한 방법 연산자방법 보통 아래와 같은 방법을 (가장 많이 사용)
const box4 = { ...box, borderRadius: 10 };
// 복사하고 싶은 객체를 문자열로 바꾼다음 다시 객체화 시켜준다. (많이 사용)
const box3 = JSON.parse(JSON.stringify(box));
