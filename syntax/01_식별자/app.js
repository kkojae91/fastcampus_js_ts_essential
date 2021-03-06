/*
1. 식별자는 변수 함수 속성명의 이름을 정의할 때 사용하는 명칭
이름 식별자는 길이 제한 x
숫자로 시작할 수 없다, 공백 문자가 포함되면 안된다.
*/
let age = 10;

// 오래된 js개발자들의 관습 1 상수는 대문자로 작성한다.
const AGE = 10;

// js 개발자들의 관습 2 단어와 단어를 구분하는 방법으로 카멜케이스 (첫 단어는 소문자 두 번째 단어는 대문자로 시작한다.)
function setAge() {}

const o = {
  age: 10,
  // 속성명을 []안에 기입할 경우 숫자로 시작할 수 있고, 공백 문자 역시 가능하다.
  ["123my Name"]: "고",
};
o.age;
// []를 사용한 속성명을 접근할 땐 동일하게 ['']를 사용해서 접근해줘야 한다.
o["123my Name"];
