const url = require('url');

let api = 'https://www.google.com/?name=vivi&age=20'

// true是把parse後的query轉成object
let getValue = url.parse(api, true).query;

console.log(`名字是${getValue.name}， 年齡${getValue.age}`);