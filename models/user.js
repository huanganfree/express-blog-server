
const { DataTypes } = require('sequelize');
const sequelize = require('./index');


const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING(100),
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
        defaultValue: ''
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = User;