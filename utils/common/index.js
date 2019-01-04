/**
 * 公用方法
 */

const Ajv = require('ajv');

const ajv = new Ajv({
    allErrors: true
});


// 参数检验
const isParamValid = module.exports.isParamValid = (schema, body) => {
    let validator = ajv.compile(schema);
    let isValid = validator(body);
    return isValid;
}