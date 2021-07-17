/*
타입 가드란 타입스크립트 내에서 어떤 변수가 2개 이상의 타입을 갖게 되는 경우가 있을 때, 
코드상에서 a라는 타입이 들어왔을 때 작동될 수 없는 코드에 대해서 경고를 해 주거나, 혹은 그것을 원천적으로 막을 수 있는 코드 테크닉, 코딩 방식을 의미한다.
*/
// 인자로 number 타입이나 string 타입이 들어올 수 있을 경우 |(파이프) 기호로 구분해준다.
function doubleTypeFunction(a: number | string) {
  if (typeof a === "string") {
    return a.replace("x", "X");
  }
  // 실질적으로 코드 흐름상 맞지 않는 메소드를 사용하고 있을 경우 타입스크립트가 경고로 알려주는 기능.
  return a.replace("Y", "y");
}

doubleTypeFunction(10);

function foo(a?: number | null) {
  // 아래의 코드가 타입 가드 기능을 한다.
  if (a === null) return;

  console.log("display before");
  // a?는 a가 null이라면 undefined로 만드는 기능 optional 기능이 아니다.
  // console.log(a?.valueOf());
  console.log(a.valueOf());
  console.log("display after");
}

foo();

interface Foo {
  foo: string;
  common: string;
}

// arg is Foo 는 return 값인 arg가 interface Foo 와 같은지를 check하는 타입가드
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

console.log(isFoo({ foo: "ok", common: "wow" }));
