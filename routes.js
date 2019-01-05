const Router = require('koa-router');
const userCtrl = require('./controllers/users');

let router = new Router();

// 用户
router.get('/user/list', userCtrl.getUserList);
router.post('/role/add', userCtrl.addRole);
router.post('/dep/add', userCtrl.addDepartment);


module.exports = router;