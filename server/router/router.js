const KoaRouter = require('koa-router')
const router = new KoaRouter()
const jwt = require('jsonwebtoken')
const key = 'Haha_520#1314@!'
const findUser = require('../api/findUser')
const userList = []

router.post('/register', async (ctx) => {
  const { username, password } = ctx.request.body
  const user = findUser(username, userList)
  if(user){
    ctx.body = {
      code: -1,
      msg: '该用户名已存在'
    }
  }else {
    userList.push({
      username, password
    })
    ctx.body = {
      code: 0,
      msg: '注册成功'
    }
  }
})
router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body
  const user = findUser(username, userList)
  if(!user){
    ctx.body = {
      code: -1,
      msg: "用户名不存在"
    }
  }else if(password !== user.password) {
    ctx.body = {
      code: -1,
      msg: '用户名或密码错误，请确认后重新输入'
    }
  }else {
    const token = await jwt.sign({ username }, key, { expiresIn: '1h' });
    ctx.body = {
      code: 0,
      username,
      token
    }
  }
})

router.get('/verify', async (ctx) => {
  const {authentication = ''} = ctx.request.header
  if(!authentication) {
    ctx.body = {
      code: -1,
      msg: '未登录状态'
    }
  }else{
    jwt.verify(authentication, key, (err, decode) => {
      if(!err){
        const username = decode.username
        ctx.body = {
          code: 0,
          username,
          token: jwt.sign({ username }, key, { expiresIn: '1h' })
        }
      }else {
        ctx.body = {
          code: -1,
          msg: '登录过期，请重新登录'
        }
      }
    })
  }
})

module.exports = router