// 함수 타입
// 어떤 타입의 매개 변수를 받고, 어떤 타입의 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수에 타입을 정의하는 방식
// 필수 매개변수는 앞에 선언하고, 선택적 매개변수는 뒤에 선언
function introduce(name = "신우혁", age?: number) {
  console.log(`name: ${name}`);

  // 선택적 매개변수는 타입 가드를 통해 타입을 확인해야 함
  if (typeof age === "number") {
    console.log(`age: ${age + 10}`);
  }
}
introduce("신우혁");
introduce("신우혁", 30);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);