const app = new (require('koa'))
const mount = require('koa-mount')
const static = require('koa-static')
const qraphqlHTTP = require('koa-graphql')

app.use(
  qraphqlHTTP({
    schema: require('./schema')
  })
)

app.listen(4000)