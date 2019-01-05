const sequelizeConnect = require('./sequelize').connect;
const redisConnect = require('./redis').connect;

module.exports = async (config) => {
    await sequelizeConnect(config);
    // await redisConnect(config);
    return;
}