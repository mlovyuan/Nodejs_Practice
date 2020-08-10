// 引入http套件
const http = require('http');

/* ======================================================
// request是取得用戶端url傳遞的訊息
// response是傳遞到前端的回應
http.createServer(function (request, response) {
    // header
  response.writeHead(200, {'Content-Type': 'text/plain'});
   // 往前端傳遞訊息並做結束
  response.end('Hello World');
  // 給定port
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
======================================================= */

http.createServer((req, res) =>{
    // 取得用戶端url傳遞的訊息
    console.log(req.url);
    // header， 解決可能出現的亂碼
    res.writeHead(200, {'Content-Type': 'text/html; charset = "utf-8"'});
    // 解決可能出現的亂碼
    res.write('<head><meta charset="UTF-8"></head>');
    // 往前端傳遞訊息
    res.write('hello');
    // 結束
    res.end();
    // 給定port
}).listen(8081);