response
 -> incomingMessage类

// 输出网页的一种写法
if (request.url === '/') {
  fa.createReadStream(__diranme + '/index.html').pipe(response)
}

// querystring内置库
const query = querystring.parse(parsedUrl)


express 中间件能力 -> next()

app.get('/path', 
  function (req, res, next) {
    console.log('1 穿入')
    next()
    console.log('5 穿出');
  },
  function (req, res, next) {
    console.log('2 穿入')
    next()
  },
  function (req, res, next) {
    console.log('3 穿入')
    next()
  },
  function (req, res, next) {
    console.log('4 穿入')
    next()
  }
)

如果存在异步IO，异步事件，就打破了洋葱模型

express适合小型应用，koa适合大型应用
