// Object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "신우혁"
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "1234567890"
};

// config.apiKey = "hacked"; // 오류 발생