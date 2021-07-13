type Book = {
  title: string;
  copyright?: string;
  author?: string;
};

const books: string[] = ["헨리 6세", "리처드 3세", "실수 연발", "말괄량이 길들이기", "헨리 8세"];

// forEach 순회 배열의 첫번째 부터 마지막까지 하나씩 순회하는 것.
// 배열이 제공하는 함수를 사용
// forEach가 가지고 있는 인자는 (value, index, array) 순서대로 항상 똑같다. 필요한 인자만 사용 가능
books.forEach((book: string, idx: number, books: string[]) => {
  console.log(book, idx);
});

// map (데이터를 변환할 경우 자주 자주 사용)
// 모든 배열을 순회하면서 리턴 값을 새로운 배열로 만들어 반환한다.
const bookObjects: Book[] = books.map((book: string) => {
  return {
    title: book,
    author: undefined,
  };
});

// console.log(bookObjects);

// 메소드 체이닝
const ShakespeareOneBooks: Book[] = books
  // 객체를 값으로서 return 한 다음 그 값을 다시 map 함수를 활용
  .map((book: string) => ({
    title: book,
  }))
  .map((book: Book) => ({
    ...book,
    author: "William Shakespeare",
  }));

// console.log(ShakespeareOneBooks);

// map함수를 두개 연결해서 사용하는 이유
const bookTitleToBookObject = (book: string) => ({ title: book });
// 커링 기법 첫 번째 함수의 return 값이 함수 그 값의 return 값이 객체
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name,
});

const shakespeareTwoBooks: Book[] = books //
  .map(bookTitleToBookObject)
  .map(makeAuthor("William Shakespeare"));

// console.log(shakespeareTwoBooks);

// filter
// 함수가 return 하는 값중 참인 값만 배열로 모아서 return 해준다.
// includes 문자열 함수 ('문자')가 포함되어 있는 값이 있다면 true 없다면 false
const henry: Book[] = shakespeareTwoBooks.filter((book: Book) => book.title.includes("헨리"));

// console.log(henry);

// reduce (누적함수)
// 항상 인자가 두개가 존재한다. a => prev, b => curr, 초기값
const someNumbers: number[] = [10, 5, 3, 14, 56];

const sumNumber = someNumbers.reduce((a: number, b: number) => a + b, 0);
console.log(sumNumber);

// reduce 함수의 응용
type SomeObject = {
  [key: string]: string | number;
};

const someObjects: SomeObject[] = [{ border: "none" }, { fontSize: 24 }, { className: "box sm-box" }];

const someObject: SomeObject = someObjects.reduce((prev: SomeObject, curr: SomeObject) => ({ ...prev, ...curr }), {});
console.log(someObject);

// 유사배열
function sumNumbers(): number {
  // 유사배열인 arguments를 배열로 만드려면 Array.from(arguments)를 해줘야한다.
  return Array.from(arguments).reduce((prev: number, curr: number) => prev + curr, 0);
}

console.log(sumNumbers(10, 20, 30, 40, 50));

// 전개파라미터인 ...args를 사용하면 바로 배열로써의 역할을 할 수 있다.
// 위의 문법 보다는 무조건 아래의 문법을 사용하는게 좋다.
function sumNumbersForTypeScript(...args: number[]): number {
  return args.reduce((prev: number, curr: number) => prev + curr, 0);
}

console.log(sumNumbersForTypeScript(10, 20, 30, 40, 50, 60));
