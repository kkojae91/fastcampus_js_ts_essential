// closure(클로저)는 함수 안쪽에서 함수가 만들어질 때 increment함수 안의 함수에 있는 코드 중에 바깥 함수에 있는 변수에 접근을 하게 되면,
// 이 접근한 변수를 closure라는 특별한 공간에 저장을 해둡니다.
// 그리고 나서 이 함수가 반환을 하면, saveNumber가 있던 increment함수의 지역 공간은 사라져서 saveNumber는 사라지지만,
// 안쪽에 함수가 만들어지면서 옮겨졌던 클로저라는 공간에는 saveNumber가 유지되고 있는 것
// 보호 되어야 하는 값이 필요하다면 closure라는 공간에 변수를 담아두고 사용할 경우 closure를 사용합니다.
// TS의 경우 private을 사용하여 값을 보호할 수 있지만 JS의 경우 그러한 스팩이 없기 때문에 closure를 사용해서 값을 보호한다.
function increment() {
  let saveNumber = 1;

  return function () {
    return saveNumber++;
  };
}

const inc = increment();
// inc를 호출할 때 saveNumber를 로컬 공간에서 찾는게 아니라 클로저라는 특별한 공간에서 saveNumber를 찾아서 저장된 값을 유지하며 반환한다.
console.log(inc());
console.log(inc());
console.log(inc());
