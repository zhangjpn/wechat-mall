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
const router = require('./routes');

let app = new Koa();


app.use(morgan('combined')); // 日志  dev/combined/
app.use(koaBody()); // 解析请求体  ctx.request.body
app.use(helmet());  // 处理安全方面的请求

app.use(cors()); // 跨域资源访问
app.use(serve(path.join(__dirname, 'public')));  // 静态资源
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000)
console.log('Server start listening...');
