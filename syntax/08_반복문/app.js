const arr = ["a", "b", "c", "d"];

// for 문을 가장 많이 사용한다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ()괄호 안의 조건이 참일 동안 반복.
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// do를 실행 하고 반복한다. (반복 전에 무슨일을 해야할 경우)
i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

// for of 문 배열안의 아이템을 하나씩 꺼내 반복한다.
for (const item of arr) {
  console.log(item);
}

// for in 문 arr에 있는 위치 값을 반복한다.
// 객체일 경우 그 key의 값을 하나씩 꺼내올때 많이 사용한다.
for (const index in arr) {
  console.log(arr[index]);
}

const obj = {
  color: "red",
  width: 200,
  height: 200,
};

for (const key in obj) {
  console.log(key);
}
