
const Router = require('koa-router');
const userCtrl = require('./controllers/users');

let router = new Router();

// 用户
router.get('/user/list', userCtrl.getUserList);


module.exports = router;

