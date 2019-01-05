/**
 * 配置文件
 */


let devConfig = {
    'DATABASE_URI': 'postgres://postgres:postgres@localhost:5432/wechatmall',
    'REDIS_URI': 'redis://192.168.1.100:6379'
}
let prodConfig = {
    'DATABASE_URI': 'postgres://postgres:postgres@localhost:5432/wechatmall',
    'REDIS_URI': 'redis://192.168.1.100:6379'
}
let testingConfig = {
    'DATABASE_URI': 'postgres://postgres:postgres@localhost:5432/wechatmall',
    'REDIS_URI': 'redis://192.168.1.100:6379'
}

module.exports = {
    development: devConfig,
    production: prodConfig,
    testing: testingConfig,
    default: devConfig,

}