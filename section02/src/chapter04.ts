// 타입 별칭
type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "신우혁",
  age: 20,
};

let user2: User = {
  name: "홍길동",
  age: 25,
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};