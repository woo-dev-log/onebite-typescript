// unknown 타입
const unKnownExam = () => {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운 캐스팅으로 오류 발생
  let num: number = unknownVar;
  let str: string = unknownVar;
  let bool: boolean = unknownVar;
}

// never 타입
const neverExam = () => {
  const neverFunc = (): never => {
    while (true) { }
  };

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅으로 오류 발생
  let never1: never = 10;
  let never2: never = "hello";
  let never3: never = true;
};


// void 타입
const voidExam = () => {
  const voidFunc = (): void => {
    console.log("void");
  };

  let voidVar: void = undefined;
}

// any 타입
const anyExam = () => {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 예외적으로 never 타입만 오류 발생
  neverVar = anyVar;
}
