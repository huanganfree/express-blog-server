/**
 * 接口code返回定义：
 * 2.登录失效401，无权限403， 成功200
 * 3.成功为200，其他失败111000
 */
const express = require('express')
const expressSession = require('express-session')
const cors = require('cors');
const MemoryStore = require('memorystore')(expressSession)

const userRouter = require('./routers/user')
const aboutRouter = require('./routers/about')
const userInfoRouter = require('./routers/userInfo')
const uploadRouter = require('./routers/multer/upload')
const downloadRouter = require('./routers/download')
const resetPasswordRouter = require('./routers/resetPassword')
const { auth } = require('./middleware/auth')
const { port } = require('./utils/globalData')
const app = express()

// 开启静态资源服务
app.use('/public/', express.static('./public/'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 所有的路由，统一配置cors
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', req.get('Origin'))
  res.set("Access-Control-Allow-Headers", "Content-Type,Access-Token") // 必须设置
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next()
})


app.use(expressSession({
  secret: 'sessiontest',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 1 },
  store: new MemoryStore({
    checkPeriod: 1000 * 60 * 60 * 1
  }),
}));


app.use('/user', userRouter)


// 需要校验登录的路由
app.use(auth, [aboutRouter, uploadRouter, userInfoRouter, resetPasswordRouter, downloadRouter])

app.listen(port, () => {
  console.log(`server is running in ${port}!`);
})


module.exports = app // 导出app对象，便于测试
