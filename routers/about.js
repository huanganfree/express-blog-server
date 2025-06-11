const express = require('express')
const router = express.Router()
const dbQueryPromise = require('../db/dbOperation')

router.use((req, res, next) => {
  next()
})


router.get('/about', async function(req, res) {
  console.log(req.session.userId);
  const total = await dbQueryPromise(`SELECT * FROM user_profile WHERE user_id='${req.session.userId}'`)
  const offset = (+req.query.pageSize) * (req.query.pageNum - 1)
  const limit = +req.query.pageSize
  // 分页查询
  dbQueryPromise(`SELECT * FROM user_profile WHERE user_id='${req.session.userId}' ORDER BY id LIMIT ${limit} OFFSET ${offset}`) //mysql中间件无法识别传入参数
    .then((results) => {
      res.json({
        code: 200,
        message: '成功',
        data: {
          records: results || [],
          total: total.length || 0,
        }
      })
    })
    .catch(err => {
      res.json({
        code: 111000,
        message: err.message
      })
    })
})

module.exports = router