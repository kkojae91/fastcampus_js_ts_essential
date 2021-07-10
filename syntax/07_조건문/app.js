// if 문, switch 문
// and && or ||
let age = 1;

if (age === 10) {
  console.log("나이는 10세");
} else if (age === 20) {
  console.log("20세");
} else if (age === 30) {
  console.log("30세");
} else {
  console.log("모르겠습니다.");
}

// 0은 거짓(false) 나머지 모든 숫자는 참(true)
// 문자열이 비어있으면 거짓(false) 어떠한 문자열이라도 들어있으면 참(true)
// null, undefined 거짓으로 판별
// 모든 객체는 속성이 있던 없던 참으로 판별

if (age) {
  console.log("나이는 10세");
}

switch (age) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  default:
    console.log("??");
    break;
}
