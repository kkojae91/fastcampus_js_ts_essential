import "regenerator-runtime/runtime";
// 가장 기본적인 함수의 형태
function myFn() {
  return 100;
}

const result = myFn();

function myFn2(x) {
  return x + 100;
}

const result2 = myFn2(10);

// 이름이 없는 함수 -> 반드시 변수에 넣어야 사용할 수 있다.
// 함수 자체를 값으로 만들 수 있다.
const myFn3 = function () {
  return 100;
};

// 인자가 가변적일때 처리해주는 함수 arguments
function sum(...args) {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s += args[i];
  }

  return s;
}

// function sum(a, b, ...args) {}
// 필수 인자는 a, b 그 뒤에 인자는 줘도 되고 안줘도 되! a, b에 값이 들어가고 c, d의 값은 args에 들어간다.

const abcSum = sum(10, 20, 30, 40);

const arr = [10, 20, 30, 40, 50];

// 함수 호출 방법은 아래와 같이 3가지.
myFn3();
sum.call(null, 10, 20, 30);
sum.apply(null, arr);

// 즉시 실행하는 함수
// function을 값으로 만들어주기 위해 ()괄호를 감싸준다. 그리고 (); 함수를 호출해준다.
// 어플리케이션 내에서 단 한번만 실행해야하는 함수가 있다면 사용하는 즉시 실행 함수.
(function () {
  console.log("즉시 실행 함수 실행!");
})();

// 화살표 함수 arrow function
const sumV2 = (a, b, ...args) => {
  let s = 0;

  for (let i = 0; args.length; i++) {
    s += args[i];
  }

  return s;
};

// 코드가 1줄일 경우!!! 만 적용된다.
// arrow function에서는 {}생략 가능 바로 리턴하는 경우 return 생략 가능
// 인자가 1개일 땐, ()생략 가능
const ten = (x) => x + 100;

// 생성기 함수
function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();

g.next();
g.next();
g.next();

// 비동기 함수
async function myTask() {}
