class HeaderListData {
  constructor(source, seperator = ",") {
    const rawData = source.split("\n");

    this.headers = rawData[0].split(seperator);
    this.rows = rawData.filter((row, index) => index > 0).map((row) => row.split(separator));
  }

  row = (index) => this.rows[index].map((row, index) => [this.headers[index], row]);

  get length() {
    return this.rows.length;
  }

  get columnLength() {
    return this.headers.length;
  }
}

export default class MakeObject extends HeaderListData {
  // 자식 class에 생성자가 없다면 바로 부모 class의 생성자를 사용하게 된다.
  // 인자가 배열, 객체일 경우 인자에 구조분해할당을 사용할 수 있다.
  toObject = (index) => this.row(index).reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

  toAllObject = () =>
    Array(this.length)
      .fill(0)
      .map((item, index) => this.toObject(index));
}
