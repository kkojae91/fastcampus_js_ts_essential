const simpleCamel = (text, splitter = " ") =>
  text
    .split(splitter)
    .map((word, wordIndex) =>
      word
        .split("")
        .map((character, characterIndex) => (wordIndex > 0 && characterIndex === 0 ? character.toUpperCase() : character.toLowerCase()))
        .join("")
    )
    .join("");

function convertCamelName(name) {
  let camelName = "";

  for (let i = 0, newSpace = false; i < name.length; i++) {
    if (name[i] == " ") {
      newSpace = true;
      // 더이상 처리하지 않고 반복문 다음으로 넘어갈 경우 continue;를 사용해준다.
      continue;
    }

    if (newSpace) {
      camelName = camelName + name[i].toUpperCase();
      newSpace = false;
    } else {
      camelName = camelName + name[i].toLowerCase();
    }
  }

  return camelName;
}

const camelName1 = convertCamelName("ko jae jeung");
const camelName2 = simpleCamel("KO JAE JEUNG");

console.log(camelName1);
console.log(camelName2);
