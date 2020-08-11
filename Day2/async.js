// 非同步方法
async function test(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name = 'Meow';
            resolve(name);
        }, 1000);
    })
}

// await必須要搭配async的方法使用
async function main(){
    // 取得非同步方法的值，若未宣告會取得Promise的物件
    const data = await test();
    console.log(data);
}

main();