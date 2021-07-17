type User = {
  id: number;
  name: string;
};

type Address = {
  zipcode: number;
  address: string;
};

function pipeOne(value: any): any {
  return value;
}

// 제네릭 사용하는 코드 아직 확정되지 않는 타입이라는 의미로 T를 보편적으로 많이 사용한다.
// 함수를 호출할 때 T라는 타입이 들어오면 인자값을 받고 함수 값을 리턴할 때 모두 T라는 타입을 사용할 거야!
function pipeTwo<T>(value: T): T {
  return value;
}

let p1 = pipeOne(10);
let p2 = pipeTwo("10");
let p3 = pipeTwo(true);

// arrow function에서 제레릭을 사용할 경우 아래와 같은 형태로 사용하면 됩니다.
const pipeObjectOne = <T>(obj: T): T => {
  return obj;
};

let po1 = pipeObjectOne({ id: 1, name: "고", zipcode: 50213 });
// 지정되지 않는 타입의 함수를 호출하면서 타입을 지정할 경우 아래와 같이 작성하면 됩니다. functionName<typeName>(인자 값)
// User 타입을 기준으로 함수가 전달되는 인자값을 검사합니다. User type에는 zipcode가 없기 때문에 빨간줄로 에러 표시를 해준다.
let po2 = pipeObjectOne<User>({ id: 1, name: "고", zipcode: 50213 });

// class에 사용하는 제네릭
// 여러개의 제네릭을 사용할 경우 , 콤마로 구분해준다. Config={} Config라는 타입의 기본값은 {} 빈객체임을 명시
class State<S, Config = {}> {
  private _state: S;
  config: Config;

  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config;
  }

  getState(): S {
    return this._state;
  }
}

let s1 = new State<Address, { activate: boolean }>({ zipcode: 50213, address: "광주시" }, { activate: true });

const s1Data = s1.getState();

console.log(s1Data.address, s1Data.address, s1.config.activate);

// generic type의 extension

// type으로 객체가 들어가고, 그 타입안에 있는 키를 타입으로 추가할 경우 extends keyof 를 사용한다.
// 즉 Type의 type은 object이고, Key의 type은 객체가 가지고 있는 key값이다.
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// 'm'이라는 값은 object가 가지고 있지 않는 key값이기 때문에 빨간줄 에러가 뜬다.
getProperty(x, "m");

// interface의 generic
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: "ko" };
let kv2: KeyPair<number, number> = { key: 2, value: 12345 };
