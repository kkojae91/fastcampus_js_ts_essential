// 호출이 성공하면 resolve 함수를 호출, 호출이 실패하면 reject함수를 호출.
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("첫번째 ok");
    // reject("실패");
  }, 2000);
});

p.then(function (ok) {
  console.log(ok);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("두번째 ok!");
    }, 3000);
  });
})
  .then(function (ok) {
    console.log(ok);
  })
  .catch(function (error) {
    console.log(error);
  });

function double(x) {
  return x * 2;
}

function calcValue(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 100);
}

const x = double(100);
const y = x;

const r = calcValue(10, 20, (result) => {
  console.log(result);
});
const z = r;
// console.log(z);
