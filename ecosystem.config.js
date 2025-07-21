module.exports = {
  apps: [{
    name: "app",
    script: "./bin/www.js",
    watch: true,
    env_development: {
      "baseURL": "localhost",
      "port": 8000,
      "NODE_ENV": "development",
      "databaseUser": "root",
      "databasePassword": "rootHA@",
    },
    env_production: {
      "baseURL": "120.26.94.24",
      "port": 81,
      "NODE_ENV": "production",
      "databaseUser": "root",
      "databasePassword": "rootHA123@",
    }
  }]
}
