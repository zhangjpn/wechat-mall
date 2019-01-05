const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize').getConnection();
const Role = require('./role.model');

const Department = module.exports = sequelize.define('department', {
    departmentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'department_id',
    },
    departmentName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'department_name',
    },
})

// 一对多，
Department.hasMany(Role, {
    sourceKey: 'departmentId',
    foreignKey: 'departmentId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    constraints: true
})