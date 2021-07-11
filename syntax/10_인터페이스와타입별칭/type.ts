// data를 정의할 경우 type alias 를 사용한다.
// data를 포괄하는 객체를 정의할 경우 interface 를 사용한다.

export type YesOrNo = "Y" | "N";
export type DayOfWeek = "월" | "화" | "수" | "목" | "금" | "토" | "일";
// enum은 실제 데이터 type은 컴파일용도로 type을 검사하는 용도.
export enum DayOfTheWeek {
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
  "일",
}

export type Name = string;
export type Email = string;
// 함수도 type 설정이 가능. 인자가 없고 반환 값이 string인 함수 타입
export type FooFunction = () => string;

export interface IUser {
  readonly id: number;
  readonly name: Name;
  email: string;
  receiveInfo: boolean;
  active: YesOrNo;
  // ?가 있으면 optional 있어도 되고 없어도 된다.
  // ?가 없으면 필수적인 요소
  address?: string;
}

export type TUser = {
  readonly id: number;
  readonly name: string;
  email: Email;
  receiveInfo: boolean;
  active: YesOrNo;
  address?: string;
};

// interface에 type alias를 확장시킬 수 있다.
export interface IUserProfile extends IUser {
  profileImage: string;
  gihub?: string;
  twitter?: string;
}

// type alias 에 interface를 확장시킬 수 있다.
export type TUserProfile = IUser & {
  profileImage: string;
  github?: string;
  twitter?: string;
};

export interface Color {
  fontColor: string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display: "none" | "block";
  visiblity: boolean;
  opacity: number;
};

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
};

export interface IStyle extends Color, Display, Geometry {
  tagName: string;
}

export type TStyle = Color &
  Display &
  Geometry & {
    tageName: string;
  };

// 객체의 type을 정할땐 아래와 같이 정의 한다 속성명 type : 속상값 type
export interface IOnlyNumberValueObject {
  [key: string]: number;
}

export type TOnlyBooleanValueObject = {
  [prop: string]: boolean;
};

// 함수 규격을 만들 경우 아래와 같이 작성합니다.
// ()괄호 안에는 인자 값의 type
// : return 값의 type
export interface IGetApi {
  (url: string, search?: string): Promise<string>;
}

export type TGetApi = {
  (url: string, search?: string): Promise<string>;
};

export interface IRect {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

// 생성자 interface 생성자를 만들어주는 함수를 따로 사용할 경우 필요!
export interface IRectConstructor {
  new (x: number, y: number, width: number, height: number): IRect;
}
