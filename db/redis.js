const Redis = require('ioredis');
const bluebird = require('bluebird');



let redis = null;

module.exports.getConnection = () => {
    return redis;
}

module.exports.connect = async (config) => {
    redis = new Redis(config.REDIS_URI);
    bluebird.promisifyAll(redis); // 给Redis的所有方法添加对应的Async方法
    return redis;
}