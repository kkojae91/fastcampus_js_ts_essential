function add(a: number, b: number): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  console.log("타입이 잘못 들어왔습니다.");
}

type ObjectType = {
  x: number;
  y: number;
};

// 서버에서 받아오는 데이터가 abc 문자열 데이터일 경우 컴파일 타임에 걸러질 수 없다. 이에대한 방어 코드가 필요합니다.
const json = `{"x":"10", "y":20}`;
// as ObjectType은 JSON.parse(json)의 값을 ObjectType으로 반환해준다는 의미
const obj: ObjectType = JSON.parse(json) as ObjectType;

const sumNum = add(obj.x, obj.y);

console.log(sumNum);
