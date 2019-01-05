const sequelize = require('../db/sequelize').getConnection();
const Sequelize = require('sequelize');
const Role = require('./role.model')
const Permission = require('./permisson.model');

const RolePermission = module.exports = sequelize.define('rolePermission');

Role.belongsToMany(Permission, {
    through: RolePermission
});
Permission.belongsToMany(Role, {
    through: RolePermission
});