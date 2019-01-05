/**
 * 关于用户具体业务逻辑
 */


const User = require('../models/user.model');
const Role = require('../models/role.model');
const Permission = require('../models/permisson.model');
const Department = require('../models/department.model');

const createUser = async (userInfo, createdBy) => {
    let user = await User.create(userInfo);
    return user;
}

const createRole = async (roleInfo, createBy) => {
    let role = await Role.create(roleInfo);

    return role;
}

const createDepartment = async (depObj, createdBy) => {
    let dep = await Department.create(depObj);
    return dep;
}

module.exports = {
    createUser,
    createRole,
    createDepartment,
}