// 一般會準備包含但不限於以下type形式的json檔案讀取進來使用
// 像是 image/jpeg, application/json, ...

exports.getMime = ((extname) => {
    switch(extname){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
})