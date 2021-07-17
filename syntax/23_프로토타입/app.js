const c1 = {
  name: "C1",
  color: "red",
};

const c2 = {
  name: "C2",
  width: 300,
};

const c3 = {
  name: "C3",
  height: 100,
};

c1.__proto__ = c3;
c3.__proto__ = c2;

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.width);

// prototype chaining 매커니즘
// 모든 객체는 __proto__ 라는 속성을 가지고 있다. 이 속성은 어떤 객체를 가르키고 있다. 그 객체는 모든 오브젝트의 조상인 Object라는 객체입니다.
// __proto__는 가장 최상위 객체인 Object가 가지고 있는 메소드 잡합입니다. toString()역시 Object가 가지고 있는 메소드 입니다.
// 어떻게 toString에 접근이 되는가?
// js는 먼저 c1이 가지고 있는 메소드 중에 toString() 메소드가 있는지 확인합니다. 없다면 __proto__안에 toString이 잇는지 찾는다.
// 있다면, 동작하고, 없다면, undefined가 됩니다.
c1.__proto__;

console.log(c1.toString()); // [object Object]

function Foo(name) {
  this.name = name;
  // 내부적으로는 아래와 같은 코드가 작성되어 있다.
  // this.__proto__ = Foo.prototype;
}

// __proto__에 lastName 속성을 추가하기 때문에, instance객체에서 lastName에 접근할 수 있습니다.
Foo.prototype.lastName = "WooWa";

const f = new Foo("kkojae");

console.log(f);
console.log(f.lastName);
