const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express_blog_server', 'root', 'rootHA@', {
  host: 'localhost',
  dialect: 'mysql'
});

async function testConnectDatabase() {
    await sequelize.authenticate();
    console.log('test === Connection has been established successfully.');
}

try {
  testConnectDatabase();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;