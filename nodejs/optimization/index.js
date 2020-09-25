const koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

app.use(
    static(__dirname + '/source/')
);

// 空间换时间，将一些计算结果缓存起来
const str = fs.readFileSync(__dirname + '/source/index.htm')

app.use(
    mount('/', async (ctx) => {
        ctx.body = str
    })
);


app.listen(4000);
module.exports = app;