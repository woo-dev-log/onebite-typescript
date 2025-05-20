// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

// 호출 시그니처
type Operation2 = {
  (a: number, b: number): number;
  name: string;
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

// 객체와 함수로 사용할 수 있음
// 하이브리드 타입이라고도 불림
add2(1, 2);
add2.name = "add";