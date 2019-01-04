const redis = require('../db/redis');


const config = {
    REDIS_URI: 'redis://192.168.1.100:6379'
}

redis.connect(config).then(db => {
    return db.getAsync('a');
}).then(a => {
    console.log('a', a);

})