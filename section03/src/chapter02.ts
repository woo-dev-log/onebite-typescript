// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "멍멍이",
  color: "brown",
  breed: "진돗개",
};

animal = dog;

// Dog 타입은 Animal 타입보다 더 많은 속성을 가지고 있어서
// Animal 타입의 객체를 Dog 타입의 변수에 할당할 수 없습니다.
dog = animal; // 오류 발생