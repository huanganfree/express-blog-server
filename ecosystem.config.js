module.exports = {
  apps: [{
    name: "app",
    script: "./app.js",
    watch: true,
    env_development: {
      "baseURL": "localhost",
      "database": "root123456",
      "NODE_ENV": "development"
    },
    env_production: {
      "baseURL": "114.55.238.107",
      "database": "rootroot123",
      "NODE_ENV": "production",
    }
  }]
}
