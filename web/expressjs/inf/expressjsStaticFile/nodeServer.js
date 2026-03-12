const http = require("http");
const fs = require("fs");
const path = require("path");

function serveStatic(rootDirectory, req, res) {
  // 요청된 URL을 기반으로 파일 경로를 생성
  const filePath = path.join(rootDirectory, req.url);

  fs.readFile(filePath, (err, data) => {
    // err: 파일을 읽는 중에 오류가 발생한 경우
    // data: 파일이 성공적으로 읽힌 경우의 내용

    if (err) {
      if (err.code === "ENOENT") {
        // 파일을 찾을 수 없을 때 사용자 정의 404 페이지를 제공
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(
          "<h1>404 Not Found</h1><p>요청하신 페이지를 찾을 수 없습니다.</p>",
        );
        // res.end();
      } else {
        // 서버 오류 처리
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end(
          "<h1>500 Internal Server Error</h1><p>서버에서 오류가 발생했습니다.</p>",
        );
        // res.end();
      }
    } else {
      // 파일을 성공적으로 읽은 경우
      const ext = path.extname(filePath);
      const contentType = getContentType(ext);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

// content type 설정을 위한 MIME 타입 매핑
function getContentType(ext) {
  switch (ext) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "application/javascript";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    default:
      return "application/octet-stream"; // 기본 MIME 타입
  }
}

const server = http.createServer((req, res) => {
  /**
   * * router 1
   */
  if (req.url == "/") {
    const homepageHTML = fs.readFileSync("./public/homepage.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(homepageHTML);
    // res.end();
  } else if (req.url === "/hello") {
    /**
     * * router 2
     */
    const helloHTML = fs.readFileSync("./public/hello.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(helloHTML);
    // res.end();
  } else {
    /**
     * * router 3
     * ! 정적 파일 제공
     */
    serveStatic("public", req, res);
  }
});
server.listen(3000, () => {
  console.log("listening on port 3000");
});
