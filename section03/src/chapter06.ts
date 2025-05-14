// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법을 말한다.

type Person = {
  name: string;
  age: number;
}

function func(value: number | string | Date | Person) {
  // 타입 가드
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { // value값이 Date 객체인지 확인
    console.log(value.getTime());
  } else if (value && 'age' in value) { // value값이 age 속성이 있는지 확인
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
}