// 连接到本地的mysql数据库
// 这里的配置是为了连接到本地的mysql数据库

module.exports = {
  host: 'localhost', // 生产和开发环境都是该地址
  port: '3306',
  database: 'express_blog_server',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10, // 设置连接池中的最大连接数
  connectTimeout: 15000
}