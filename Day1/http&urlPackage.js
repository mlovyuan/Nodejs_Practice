const http = require('http');
const url = require('url');


http.createServer((req, res) =>{
    console.log(req.url);

    res.writeHead(200, {'Content-Type': 'text/html; charset = "utf-8"'});

    res.write('<head><meta charset="UTF-8"></head>');

    // http:127.0.0.1/?name=vivi&age=20
    console.log(req.url);
    if(req.url != '/favicon.ico'){
        let userInfo = url.parse(api, true).query;
        console.log(`名字是${userInfo.name}， 年齡${userInfo.age}`);
    }

    res.write('hello');

    res.end();

}).listen(8081);