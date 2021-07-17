// JSON는 boolean, string, number, object, array를 지원한다.
// function은 지원하지 않는다.

const jsonString = `
  {
    "name": "Ko jae jeung",
    "age": 30,
    "bloodType": "O"
  }
`;

// JSON parse를 할경우 항상 try catch로 오류가 발생했을 때 처리하는 구문을 넣어 주어야 한다.
try {
  // JSON to Object
  const myJson = JSON.parse(jsonString);
  console.log(myJson.name);

  // Object to JSON
  const objectToJson = JSON.stringify(myJson);
  console.log(objectToJson);
} catch (e) {
  console.log("다시 한번 시도해 주세요.");
}
