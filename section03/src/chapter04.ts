// 타입 추론

let a = 10; // let a: number
let b = "hello"; // let b: string
let c = {
  id: 1,
  name: "신우혁",
  profile: {
    nickname: "winterlood",
  }
}
// let c: { id: number; name: string; profile: { nickname: string }; }

// id: number, name: string, profile: { nickname: string }
let { id, name, profile } = c;

// one: number, two: string, three: boolean
let [one, two, three] = [1, "hello", true];

// function func(message?: string): string
function func(message = "hello") {
  return "hello";
}

// 암묵적 any 타입으로 추론됨
// 변수의 타입이 진화한다
let d;

d = 10; // d는 number 타입으로 추론됨
d.toFixed();
d.toUpperCase(); // 오류 발생

d = "hello"; // d는 string 타입으로 추론됨
d.toUpperCase();
d.toFixed(); // 오류 발생

// 명시적 any 타입 선언을 하게 되면 타입 추론을 무시하고 모든 타입을 허용함
let e: any;

e = 10;
e.toFixed();
e.toUpperCase(); // 오류 발생하지 않음

e = "hello";
e.toUpperCase();
e.toFixed(); // 오류 발생하지 않음

// 리터럴 타입 추론으로 추론됨
//const num: 10
const num = 10;
//const str: "hello"
const str = "hello";

// 유니온 타입으로 추론됨
// let arr: (number | string | boolean)[]
let arr = [1, "hello", true];