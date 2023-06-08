module.exports = {
  apps: [{
    name: "app",
    script: "./bin/www.js",
    watch: true,
    env_development: {
      "baseURL": "localhost",
      "databaseP": "root123456",
      "port": 8000,
      "NODE_ENV": "development",
    },
    env_production: {
      "baseURL": "114.55.238.107",
      "databaseP": "rootroot123",
      "port": 81,
      "NODE_ENV": "production",
    }
  }]
}
