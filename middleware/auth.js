/**
 * 校验用户
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const auth = (req, res, next) => {
  const userName = req.session.username;
  console.log('userName==', userName);
  if (userName) {
    next(); // 继续执行下一个中间件或路由处理函数
  } else {
    res.json({
      code: 401,
      message: '请登录'
    })
    next('router') // 终止路由
  }
}

module.exports = {
  auth
}