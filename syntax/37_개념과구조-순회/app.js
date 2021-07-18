// 값을 두배로 만드는 순회
// 명령형 프로그래밍
const array = [1, 2, 3, 4];
const arr = [];

for (const n of array) {
  arr.push(n * 2);
}

console.log(arr);

// 함수형 프로그래밍
// 아래와 같이 짜여진 코드를 명령형 프로그램으로 작성하려면 코드의 길이가 많이 길어진다. 함수형 프로그래밍을 많이 연습!
const arr2 = array
  .map((num) => num * 2)
  .filter((num) => num % 2 !== 0)
  .map((num) => `<li>${num}</li>`);

console.log(arr2);
