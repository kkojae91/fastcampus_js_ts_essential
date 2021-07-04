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

  // JSON파일을 객체화 시켜주기 위해 JSON.parse를 사용!
  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];

  newsList.push("<ul>");

  for (let i = 0; i < 10; i++) {
    newsList.push(`
    <li>
      <a href="#${newsFeed[i].id}">${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
    </li>
    `);
  }
  newsList.push("</ul>");

  container.innerHTML = newsList.join("");
}

function newsDetail() {
  // substr(startIndex, length), substring(startIndex, endIndex), slice(startIndex, endIndex) 문자열 잘라내는 방법!
  const id = location.hash.substr(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
      <a href="#">목록으로</a>
    </div>
  `;
}

function router() {
  const routePath = location.hash;

  if (routePath === "") {
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);

router();
