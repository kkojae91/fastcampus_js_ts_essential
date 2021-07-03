"use strict";
const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

// 동기적으로 처리할 경우 마지막 옵션 값을 false를 주면 됩니다.
ajax.open("GET", NEWS_URL, false);
ajax.send();

// ajax.response 를 사용하면 값을 불러 올 수 있다 JSON 타입
// JSON파일을 객체화 시켜주기 위해 JSON.parse를 사용!
const newsFeed = JSON.parse(ajax.response);
const root = document.querySelector("#root");
const ul = document.createElement("ul");
root.appendChild(ul);

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}
