
const { DataTypes } = require('sequelize');
const sequelize = require('./index');


const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING(200),
    },
    password: {
        type: DataTypes.STRING(100)
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    signature: {
        type: DataTypes.STRING(100),
        defaultValue: '这个人很懒，什么都没有留下'
    },
    avatar: {
        type: DataTypes.STRING(100),
    },
}, {
    tableName: 'user',
    timestamps: false,
});

// 暂不做同步到数据库本身
// (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
// })();
module.exports = User