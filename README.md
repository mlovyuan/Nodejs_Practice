# Nodejs_Practice
未來工作可能用到，預習個先。

大致上會是Nodejs、Express、Mongodb、Mongoose的部分。

<br />

### Day1 - Nodejs
---
- http、url兩個package的基本功能，像是`http.createServer`和`url.parse(api, true).query`的使用。
- 自訂義package的編寫與引用，以及`exports`和`module.exports`用法上的差異，可見node_modules/test2/index.js。
- 自訂義package若放在node_modules資料夾下，且檔案已index.js命名，引用時可以省略對路徑的寫法。若放在node_modules資料夾下但檔案命名為其他，需在該位置下指令`npm init -y`建立package.json幫助node尋找。
