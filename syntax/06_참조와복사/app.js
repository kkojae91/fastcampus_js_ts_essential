// 변수의 경우 복사 된다.
let a = 10;
let b = a;

// a는 10, b는 20으로 할당 된다.
b = 20;

// 객체의 경우 참조된다.
let o = {
  isLoading: false,
};

// let o2 = o;
// o2, o 모두 true로 변경된다.
// o2.isLoading = true;

function foo(o) {
  o.isLoading = true;
}

foo(o);

console.log("done");
