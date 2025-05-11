// 배열 타입
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "World"];
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "Hello"];

// 다차원 배열의 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5]
];

// 튜플 타입 - 길이와 타입이 고정된 배열
let tuple1: [number, string] = [1, "Hello"];
let tuple2: [number, string, boolean] = [1, "Hello", true];