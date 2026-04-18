const port = process.env.PORT
// 上传到服务器地址
const BaseURL = "http://" + process.env.DB_HOST + ":"+ port
// 图片上传到服务器的目录
const imgPath = '/public/'


module.exports = {
  port,
  BaseURL,
  imgPath
}