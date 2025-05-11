// void
// 함수에서 반환 값이 없는 경우 사용
function fun1(): string {
  return "hello";
}

function fun2(): void {
  console.log("void");
}

// never
// 불가능한 타입
function fun3(): never {
  while (true) { }
}

function fun4(): never {
  throw new Error("error");
}