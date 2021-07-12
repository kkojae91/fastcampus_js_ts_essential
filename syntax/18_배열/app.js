const books = [];

books[0] = "헨리 6세 제1부";
books[1] = "헨리 6세 제2부";
books[2] = "헨리 6세 제3부";

// 배열의 가장 마지막 index에 값을 집어 넣는다. 변수명.push('값')
books.push("리처드 3세");
books.push("실수 연발");
books.push("말괄량이 길들이기");

console.log(books);
// 배열의 길이 (배열에 몇개의 데이터가 들어있는지 확인할 경우) 변수명.length
console.log(books.length);

// 배열의 가장 마지막 index의 값을 제거하면서 꺼내온다. 변수명.pop()
const bookPop = books.pop();
console.log(bookPop); // 말괄량이 길들이기
books.pop();

console.log(books);
console.log(books.length);

// 배열의 startIndex, endIndex-1 까지의 원소를 잘라 온다.
// index 1 ~ index2 전까지의 원소를 oneBooks 변수에 할당한다.
// 원래 배열은 그대로 유지
const oneBooks = books.slice(1, 2);

console.log(oneBooks);
console.log(books);
console.log(books.length);

// 꺼내오기도 하고, 꺼내온 자리에 새로운 데이터를 추가하기도 한다.
// startIndex부터 몇개를 꺼내올지.
// splice(startIndex, length)
const twoBooks = books.splice(1, 2, "햄릿", "오셀로", "리어왕");

console.log(twoBooks);
console.log(books);
console.log(books.length);

// 배열의 앞의 원소를 빼오는 것(빼온값 return) 변수명.shift() pop의 반대로 앞에서 원소 제거
const twoBooksShift = twoBooks.shift();
console.log(twoBooksShift);
console.log(twoBooks);

// 배열의 앞에 원소를 추가한다. 변수명.unshift('값')
twoBooks.unshift("한여름 밤의 꿈");
console.log(twoBooks);

// 배열의 모든 원소 ','를 기준으로 문자열로 반환
// seperator를 '' 따옴표를 넣으면 구분자 없이 문자열로 반환
// seperator를 " " 공백문자를 넣으면 " "공백을 기준으로 문자열로 반환
const allBooks = books.join();
console.log(allBooks);

// seperator를 기준으로 문자열을 배열로 반환
const newBooks = allBooks.split(",");
console.log(newBooks);

console.log(oneBooks);
console.log(twoBooks);

// oneBooks를 기준으로 twoBooks의 배열을 합친다.
// 배열 합치기 기준변수명.concat(합칠배열 변수명)
const nextBooks = oneBooks.concat(twoBooks);
console.log(nextBooks);

// 배열 합치기 전개연산자. (많이 사용) - 가독성 높고, 표현력 높음
const nextBookList = [...oneBooks, ...twoBooks];
console.log(nextBookList);
