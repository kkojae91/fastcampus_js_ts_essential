/*
구조 분해 할당
*/

const colors = ["red", "yellow", "black"];

// 객체도 구조 분해 할당할 수 있다.
const Colors = {
  blue: "blue",
  green: "green",
  white: "white",
};

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];
// 위의 코드를 아래와 같이 구조 분해 할당할 수 있다.
const [red, yellow, black] = colors;
const { withe, green } = Colors;

console.log(yellow);

// 조건 삼항 연산자
let a = 10;
let b = "10";
if (a === b) {
  a = 0;
} else {
  a = 1;
}

// 위의 코드를 아래 와 같이 삼항 연산자를 사용할 수 있다.
a = a === b ? 0 : 1;

// 함수를 ()괄호로 감싸게 되면 값으로 강제 변환할 수 있다.
(function foo() {});
