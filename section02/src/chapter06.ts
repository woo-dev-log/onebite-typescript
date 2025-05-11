// any
// 특정 변수의 타입을 모르는 경우 사용
// 모든 타입의 값을 할당할 수 있음
// 최대한 사용하지 않는 것이 좋음

let a: any = 1;
let num: number = 2;
num = a;

// unknown
// any와 비슷하지만 더 엄격한 타입
// 모든 타입의 값을 할당할 수 있음
// 최대한 사용하지 않는 것이 좋음

let b: unknown;
b = "hello";
b = true;
b = () => { };

if (typeof b === "number") {
  num = b;
}