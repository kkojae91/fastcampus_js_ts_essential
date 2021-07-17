// module을 설치했는데 타입스크립트가 지원하지 않는 경우 @types/uuid 를 npm site에서 검색하신 후 설치하면 됩니다.
// terminal 환경에서
// npm install uuid
// npm install @types/uuid
import { v4 } from "uuid";

type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
};

const makeObject = (): UniqObject => ({
  id: v4(),
});

console.log(makeObject());
console.log(makeObject());
