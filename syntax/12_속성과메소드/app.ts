type MyObject = {
  name: string;
  // With TS 외부에서 삭제, 변경 불가능
  readonly age: number;
  getFamilyName: () => string;
  getLastName: () => string;
  getBloodType: () => string;
};

// 객체
const obj: MyObject = {
  // 속성
  name: "jae jeung",
  age: 31,
  // 메소드 표현 방법 3가지
  getFamilyName: function () {
    return "Ko";
  },
  getLastName: () => "Ko",
  getBloodType() {
    return "O";
  },
};

obj.name;
obj.age;
obj.getFamilyName();
obj.getBloodType();

obj.age = 200;
obj.age = -500;

// getter, setter는 일반 객체에서는 생성할 수 없다.
class Preson {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  // 외부에서 접근해야 하는 경우 set을 붙여준다.
  set bloodType(bType: string) {
    if (bType === "A" || bType === "B" || bType === "O" || bType === "AB") {
      this._bloodType = bType;
    }
  }

  // 외부에서 호출할 수 있게 설정하려면 get을 붙여준다.
  get bloodType() {
    return `${this._bloodType}형`;
  }
}

const p1 = new Preson("O");

// 외부에서 호출하기 위해 getter를 사용
p1.bloodType;
// 혈액형은 a, b, o, ab 인데 c와 같이 다른 값을 설정할 수 없게 만들기 위해 setter를 사용
p1.bloodType = "C";

// With JS
const myObj = Object.create(null, {
  name: {
    value: "ko jae jeung",
    // writable을 true 해주면, 외부에서 값을 변경할 수 있다.
    // false로 해주면, 변경 불가능 readonly
    writable: true,
    // configurable을 true로 해주면, 외부에서 속성 삭제 가능
    // false로 해주면, 속성 삭제 불가능
    configurable: false,
  },
});

myObj.name;
