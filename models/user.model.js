const sequelize = require('../db/sequelize').getConnection();
const Sequelize = require('sequelize');



module.exports = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});