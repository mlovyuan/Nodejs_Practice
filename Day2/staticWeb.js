const http = require('http');
const fs = require('fs');
const common = require('./module/common');
const path = require('path');

http.createServer(function (req, res) {

    // 要獲取的url
    // http://127.0.0.1:8081/Login.html
    // http://127.0.0.1:8081/Index.html
    let pathname = req.url;
    pathname = pathname=='/' ? '/Index.html': pathname;
    
    // 取得後綴名
    let extname = path.extname(pathname);

    if(pathname != '/favcion.ico'){
        fs.readFile('./staticMaterial' + pathname, (err, data) => {
            if (err){
                res.writeHead(404, {'Content-Type': 'text/html; charset = "utf-8"'});
                res.end('Page doesn\'t exist');
            }
            let mime = common.getMime(extname);
            res.writeHead(200, {'Content-Type': `${mime}; charset = "utf-8"`});
            res.end(data);
        })
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');