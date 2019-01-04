/**
 * 用户相关路由接口
 */

const isParamValid = require('../utils/common').isParamValid;

exports.getUserList = async (ctx, next) => {
    const schema = {
        properties: {
            name: {
                type: 'string',
                minLen: 1,
            }
        },
        required: ['name']
    };

    if (!isParamValid(schema, ctx.request.query)) {
        ctx.throw(400);
    }
    ctx.response.body = '<h1>User list</h1>'
}