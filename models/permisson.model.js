const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize').getConnection();
const Role = require('./role.model');

const Permission = module.exports = sequelize.define('permission', {
    permissionId: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        primaryKey: true,
        field: 'permission_id',
    },
    permissionName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'permission_name',
    },
    url: {
        type: Sequelize.STRING,
        field: 'url',
    }
})


Permission.belong