const express = require("express");

const app = express(); // express application object

app.all("/hello", (req, res, next) => {
  // 전달된 데이터의 타입에 맞는 Content-Type 헤더를 자동으로 설정하여 응답을 보냄
  res.send("<h1>hello world!!!</h1>");
});

app.listen(3000, () => {
  console.log("테스트요~~");
});
