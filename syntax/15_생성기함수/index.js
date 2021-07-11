import "regenerator-runtime/runtime";

function makeInfiniteEnergyGenerator() {
  let energy = 0;
  return function (booster = 0) {
    if (booster) {
      energy += booster;
    } else {
      energy++;
    }

    return energy;
  };
}

// const energy = makeInfiniteEnergyGenerator();

// for (let i = 0; i < 5; i++) {
//   console.log(energy());
// }

// console.log(energy(5));

// generator function
function* infiniteEnergyGenerator() {
  let energy = 1;
  while (true) {
    // yield를 만나면 generator를 멈추면서 호출자에게 yield를 반환 해준다(객체 형태로).
    const booster = yield energy;

    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
  }
  // return을 만나면 done: true가 됩니다.
  // return ;
}

// generator를 실행 시키면 정확히는 함수가 실행 되지 않고 함수를 실행할 수 있는 객체가 반환 됩니다.
// next()를 호출하면, 함수를 재개시키는 역할을 한다.
const energyGenerator = infiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5));
