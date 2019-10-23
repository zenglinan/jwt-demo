const Koa = require('koa')
const router = require('./router/router')
const BodyParser = require('koa-body')
const allowOrigin = require('./middleware/allowOrigin')
const app = new Koa()

app.use(BodyParser())  // 解析请求体
app.use(allowOrigin)  // 允许跨域
app.use(router.routes())  // 路由
app.listen(3000, () => {
  console.log('listening at 3000 port')
})