const sequelize = require('../db/sequelize').getConnection();
const Sequelize = require('sequelize');
const User = require('./user.model');

const Role = module.exports = sequelize.define('role', {
    roleId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'role_id'
    },
    rolename: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'rolename'
    },
    departmentId: {
        type: Sequelize.INTEGER,
        field: 'department_id',
    }
});

Role.hasMany(User, {
    foreignKey: 'roleId',
    sourceKey: 'roleId',
    onDelete: 'CASCADE',
    constaints: true,
})