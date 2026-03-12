const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("req.url확인: ", req.url);
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const helloHTML = fs.readFileSync("./hello.html", "utf-8");
    res.write(helloHTML);

    res.end();
  } else if (req.url == "/first.png") {
    res.writeHead(200, { "Content-Type": "image/png" });

    const image = fs.readFileSync("./first.png");
    res.write(image);

    res.end();
  }
});
// port number: 서버가 클라이언트의 요청을 기다리는 포트 번호
server.listen(3000, () => {
  console.log("listening on port 3000");
});
