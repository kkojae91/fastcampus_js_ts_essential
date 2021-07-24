const sourceObject = {
  traits: {
    first_name: {
      value: "Bob",
      source_id: 1,
      updated_at: 1623238587468,
    },
    emails_opened_last_30_days: {
      value: 33,
      source_id: 2,
      updated_at: 1623238601089,
    },
  },
  cursor: {
    url: "/v1/spaces/lgJ4AAjFN4",
    has_more: false,
    next: "",
  },
};

// 깊은 복사
// 2 depth 이상일 경우 깊은 복사를 사용해야 한다.
const newObject1 = JSON.parse(JSON.stringify(sourceObject));
// 얕은 복사
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = { ...sourceObject };

console.log(sourceObject.traits.first_name.source_id);

newObject1.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

// 얕은 복사를 사용하면 2depth 부터는 참조하게 된다. 원본을 훼손하게 된다.
newObject2.traits.first_name.source_id = 100;

console.log(sourceObject.traits.first_name.source_id);

// 얕은 복사를 사용하면 2depth 부터는 참조하게 된다. 원본을 훼손하게 된다.
newObject3.traits.first_name.source_id = 500;

console.log(sourceObject.traits.first_name.source_id);

// data가 커지면 JSON.parse(JSON.stringify)의 성능이 좋지않다.
function deepCopyObject(obj) {
  const clone = {};
  for (const key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      clone[key] = deepCopyObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

const newObject4 = deepCopyObject(sourceObject);

console.log(sourceObject.traits.first_name.source_id);

newObject4.traits.first_name.source_id = 1000;

console.log(sourceObject.traits.first_name.source_id);

const store = {
  user: null,
  cart: [],
  config: {
    multiDevice: false,
    lastLoginData: "Wed Jun 09 2021 20:46:55 GMT+0900",
  },
};

const newObject5 = {
  ...deepCopyObject(store),
  config: {
    ...store.config,
    lastLoginData: new Date(),
  },
};

console.log(newObject5);

// default 값 설정하는 테크닉
const DefaultStyle = {
  color: "#fff",
  fontColor: "#999",
  fontSize: 14,
  fontWeight: 200,
};

function createParagraph(config) {
  config = { ...DefaultStyle, ...config };
  // Do somethinf
  console.log(config);
}

createParagraph({ fontSize: 12 });
