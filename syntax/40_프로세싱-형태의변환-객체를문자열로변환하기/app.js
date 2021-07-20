/*
문자열 포맷: id, item, price, discount
*/

const cartItems = [
  { id: 1, item: "핸드밀", price: 40000, discount: 0 },
  { id: 2, item: "A4용지", price: 4000, discount: 0 },
  { id: 3, item: "수영복", price: 120000, discount: 0 },
  { id: 4, item: "색연필72색", price: 150000, discount: 0 },
];

// 전통적인 반복문을 이용한 코드 패턴
const cartItemsArray = [];

for (const item of cartItems) {
  const row = [];

  // 객체 안의 key, value를 꺼내올 수 있는 방법
  // Object가 제공하는 entries라는 메소드가 있다. 이 메소드 안에 객체를 집어 넣으면 key, value를 각각 꺼내올 수 있다.
  // value만 가지고 오고 싶을 경우 구조분해 할당을 통해 [, value] key값을 생략할 수 있다.
  for (const [, value] of Object.entries(item)) {
    // console.log(key, value);
    row.push(value);
  }
  cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join("==="));

// 배열연산을 이용한 방법
const extractValueInObject = (obj) =>
  Object.entries(obj) //
    .map(([, value]) => String(value));

const cartItemsString = cartItems //
  .map(extractValueInObject)
  .join("===");

console.log(cartItemsString);
