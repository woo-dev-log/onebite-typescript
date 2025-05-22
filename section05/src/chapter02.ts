// 인터페이스 확장
// 타입 재정의시 상속 받는 타입의 서브 타입이어야 가능
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat { }

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};