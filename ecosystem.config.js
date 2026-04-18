module.exports = {
  apps: [
    {
      name: "app",
      script: "./bin/www.js",
      watch: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // 日志时间
      // env_development: {
      //   NODE_ENV: "development",
      // },
      env_production: {
        NODE_ENV: "production"
      },
    },
  ],
};
