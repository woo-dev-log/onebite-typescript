// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
}

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
}

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
}

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      // admin 타입
      console.log(`${user.name}님은 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
      break;
    case "MEMBER":
      // member 타입
      console.log(`${user.name}님은 현재까지 ${user.point}점을 획득하였습니다.`);
      break;
    case "GUEST":
      // guest 타입
      console.log(`${user.name}님은 현재까지 ${user.visitCount}번 방문하였습니다.`);
      break;
  }
}