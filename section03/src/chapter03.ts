// 대수 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (string | number | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person;

let union1: Union = {
  name: "",
  color: "",
};

let union2: Union = {
  name: "",
  language: ""
};

let union3: Union = {
  name: "",
  color: "",
  language: "",
};

let union4: Union = {
  name: ""
};


// 교집합 타입
type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: ""
}