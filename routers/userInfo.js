const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')
const { imgPath, BaseURL } = require('../utils/globalData')
const User = require('../models/user')

router.use((req, res, next) => {
  next()
})

router.get('/userInfo', async function (req, res) {
  const userId = req.session.userId
  // 新写法
  const results = await User.findAll({ where: { id: `${userId}` } })
  console.log('results-login==', results);
  const [obj = {}] = results
  const { avatar } = obj
  res.json({
    code: 200,
    message: '成功',
    data: {
      ...obj.dataValues,
      avatar: avatar ? BaseURL + imgPath + avatar : null
    }
  })
})

router.post('/userInfo', async function (req, res) {
  const userId = req.session.userId
  await User.update({ signature: `${req.body.signature || ''}` }, { where: { id: `${userId}` } })
  res.json({
    code: 200,
    message: '修改成功'
  })
})

module.exports = router