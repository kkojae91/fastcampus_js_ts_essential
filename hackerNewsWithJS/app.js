"use strict";
const container = document.querySelector("#root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  // 동기적으로 처리할 경우 마지막 옵션 값을 false를 주면 됩니다.
  ajax.open("GET", url, false);
  ajax.send();

  // ajax.response 를 사용하면 값을 불러 올 수 있다 JSON 타입
  // JSON파일을 객체화 시켜주기 위해 JSON.parse를 사용!
  return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);
const ul = document.createElement("ul");

window.addEventListener("hashchange", () => {
  // substr(startIndex, length), substring(startIndex, endIndex), slice(startIndex, endIndex) 문자열 잘라내는 방법!
  const id = location.hash.substr(1);

  const newsContent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");

  title.innerHTML = newsContent.title;
  content.appendChild(title);
});

// dom API를 최대한 사용하지 않고 innerHTML을 사용해서 마크업 구조를 한눈에 보기 쉽게 수정
for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");

  div.innerHTML = `
  <li>
    <a href="#${newsFeed[i].id}">${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
  </li>
  `;

  // div는 담아주는 그릇이였기때문에, ul테그 안에 firstElementChild를 활용해서 li태그만 append 해준다.
  ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(content);
