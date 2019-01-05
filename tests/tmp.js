const Redis = require('ioredis');

const redis = async (config) => {

    const r = new Redis('redis://localhost:6379')
    r.on('connect', (c) => {
        console.log(c, 'connection');
    })
    r.on('error', (e) => {
        console.error(e, 'error');
    })
}