const sequelize = require('../db/sequelize').getConnection();
const Sequelize = require('sequelize');


const User = module.exports = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'username',
    },
    password: {
        type: Sequelize.STRING,
        field: 'password',
    },
    roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'role_id'
    },
    parentId: {
        type: Sequelize.INTEGER,
        field: 'parent_id'
    }
});