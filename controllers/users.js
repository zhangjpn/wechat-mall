/**
 * 用户相关路由接口
 */

const isParamValid = require('../utils/common').isParamValid;
const userService = require('../services/user.services');


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
    let userObj = await userService.createUser(ctx.request.body);
    ctx.response.body = userObj;
}

exports.addRole = async (ctx, next) => {
    const schema = {
        properties: {
            rolename: {
                type: 'string',
                minLen: 1
            },
            departmentId: {
                type: 'number',
            },

        },
        required: ['rolename', 'departmentId']
    }
    if (!isParamValid(schema, ctx.request.body)) {
        ctx.throw(400)
    }
    let roleObj = await userService.createRole(ctx.request.body);
    ctx.body = roleObj;
    ctx.response.type = 'json'

}


exports.addDepartment = async (ctx, next) => {
    const schema = {
        properties: {
            departmentName: {
                type: 'string',
                minLen: 1
            }
        },
        required: ['departmentName']
    }
    if (!isParamValid(schema, ctx.request.body)) {
        ctx.throw(400);
    }
    let depObj = await userService.createDepartment(ctx.request.body);
    ctx.response.body = depObj;
}