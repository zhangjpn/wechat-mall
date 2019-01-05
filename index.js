/**
 * @author zhangjpn
 * 
 */

const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const helmet = require('koa-helmet');
const morgan = require('koa-morgan');
const cors = require('@koa/cors');
const serve = require('koa-static');
// const router = require('./routes');
const initDB = require('./db');
const config = require('./config');

let app = new Koa();

const initMiddleware = (app) => {
    app.use(morgan('dev')); // 日志  dev/combined/
    app.use(koaBody()); // 解析请求体  ctx.request.body
    app.use(helmet()); // 处理安全方面的请求

    app.use(cors()); // 跨域资源访问
    app.use(serve(path.join(__dirname, 'public'))); // 静态资源
    const router = require('./routes');
    app.use(router.routes());
    app.use(router.allowedMethods());
    return app;
}


initDB(config[app.env] || config['default']).then(() => {
    initMiddleware(app);
    app.listen(3000)
    console.log('Server start listening...');
}).catch(err => {
    console.error(err);
    process.exit(1);
})


process.on('error', (err) => {
    console.error(err);
    process.exit(1)
})