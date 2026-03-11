const http = require("http");

const server = http.createServer((req, res) => {
  /**
   * * write head > 1) states code, 2) MIME type object
   */
  res.writeHead(200, { "Content-Type": "text/html" });

  /**
   * * res.write > 클라이언트로 보낼 데이터 작성
   */
  res.write("<h1>Hello World</h1>");

  /**
   * * res.end > 클라이언트로 보낼 데이터 작성 완료 & 응답 종료
   */
  res.end();
});
4;
// port number: 서버가 클라이언트의 요청을 기다리는 포트 번호
server.listen(3000, () => {
  console.log("listening on port 3000");
});
