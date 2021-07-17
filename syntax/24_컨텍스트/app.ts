const person = {
  name: "ko jae jeung",
  age: 31,
  getAge() {
    return this.age;
  },
};

person.age; // 31
person.getAge(); // 31

const age = person.getAge; // () = > this.age;
age(); // undefined

// context는 execution context(실행컨택스트)와 lexical context 2가지가 존재합니다.

// 실행컨텍스트에서 소유자가 사라지는것을 막기 위해 call(소유자)를 지정해주면 this.age가 출력됩니다.
age.call(person); // 31

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // getAge를 bind를 활용해 항상 getAge함수의 소유자를 잃어버리지 않도록 고정시켜주는 역할을 한다.
    // call 함수에 인자로 전달하지 않아도 소유자가 Person객체를 가르키게 됩니다.
    this.getAge = this.getAge.bind(this);
  }

  getAge() {
    return this.age;
  }

  // lexical context(어휘 맥락)
  // lexical context는 에로우 function을 사용하면 자동적으로 소유자가 Person객체로 지정이 된다. 따로 bind해주지 않아도 된다.
  getName = () => this.name;
}

const p1 = new Person("kkojae", 21);
p1.getAge(); // 21

const myAge = p1.getAge;

// myAge.call(p1);
// constructor에 bind를 활용해주면 위와 같이 작성하지 않고 아래와 같이 작성할 수 있습니다.
myAge();

p1.getName();
const x = p1.getName;
// 메소드를 생성할때 에로우 function을 사용해서 만들면 소유자가 바뀌지 않기때문에 항상 같은 소유자로 접근할 수 있다.
x();
