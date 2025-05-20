// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급 판단

// 1. 반환값의 타입이 호환되는 경우
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 호환되는 경우
b = a; // 호환되지 않는 경우

// 2. 매개변수의 타입이 호환되는 경우

// 2-1. 매개변수의 개수가 같은 경우
type C = (a: number) => void;
type D = (a: 10) => void;

let c: C = (value) => { };
let d: D = (value) => { };

c = d; // 호환되지 않는 경우
d = c; // 호환되는 경우

// 2-2. 매개변수의 개수가 다른 경우
type E = (a: number, b: number) => void;
type F = (a: number) => void;

let e: E = (value1, value2) => { };
let f: F = (value) => { };

e = f; // 호환되는 경우
f = e; // 호환되지 않는 경우