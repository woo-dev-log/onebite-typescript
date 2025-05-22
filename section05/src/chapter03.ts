// 선언 합침
// 같은 이름의 인터페이스 선언시 합침
interface Person {
  name: string;
}

interface Person {
  name: number; // 오류: 중복 선언 시 타입이 같아야 함
  age: number;
}

const person: Person = {
  name: '신우혁',
  age: 20,
};