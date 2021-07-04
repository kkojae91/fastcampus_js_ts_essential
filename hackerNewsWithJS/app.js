"use strict";
const container = document.querySelector("#root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

// 동기적으로 처리할 경우 마지막 옵션 값을 false를 주면 됩니다.
ajax.open("GET", NEWS_URL, false);
ajax.send();

// ajax.response 를 사용하면 값을 불러 올 수 있다 JSON 타입
// JSON파일을 객체화 시켜주기 위해 JSON.parse를 사용!
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement("ul");

window.addEventListener("hashchange", () => {
  // substr(startIndex, length), substring(startIndex, endIndex), slice(startIndex, endIndex) 문자열 잘라내는 방법!
  const id = location.hash.substr(1);

  ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement("h1");
  title.innerHTML = newsContent.title;
  content.appendChild(title);
  // console.log(newsContent);
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  li.append(a);
  ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);
