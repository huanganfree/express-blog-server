module.exports = {
  apps: [
    {
      name: "app",
      script: "./bin/www.js",
      watch: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // 日志时间
      env_development: {
        // 开发环境
        baseURL: "localhost",
        port: 8000,
        NODE_ENV: "development",
        databaseUser: "root",
        databasePassword: "rootHA@",
      },
      env_production: {
        // 生产环境
        baseURL: "120.26.94.24",
        port: 81,
        NODE_ENV: "production",
        databaseUser: "root",
        databasePassword: "rootHA123@",
      },
    },
  ],
};
