// 타입 단언
type Person = {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = "신우혁";
person.age = 30;

type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: "멍멍이",
  color: "brown",
  breed: "시츄",
} as Dog;

// 타입 단언의 규칙
// A가 B의 슈퍼 타입이거나 B가 A의 서브 타입인 경우에만 사용할 수 있다.
let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as string; // 오류 발생

// const 단언
let num4 = 10 as const; // let num4: 10

let cat = {
  name: "야옹이",
  color: "yellow",
}
// let cat: { readonly name: string; readonly color: string; }

// Non Null 단언
type Post = {
  title: string;
  author?: string;
}

let post: Post = {
  title: "제목",
  author: "신우혁",
}

// 오류 발생
const len: number = post.author?.length; // 'undefined' 형식은 'number' 형식에 할당할 수 없습니다.

// 오류 발생하지 않음
const len2: number = post.author!.length;