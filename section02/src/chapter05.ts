// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해둘 수 있는 타입

enum Role {
  ADMIN,
  USER,
  GUEST
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "신우혁",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
  language: Language.english,
};

console.log(user1);
console.log(user2);
// { name: '신우혁', role: 0, language: 'ko' }
// { name: '홍길동', role: 1, language: 'en' }