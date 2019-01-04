
/**
 * 测试连接
 */

const Sequelize = require('sequelize');
const sequelizeConn = require('../db/sequelize').connect;
const getConnection = require('../db/sequelize').getConnection;


let config = {
    'DATABASE_URI': 'postgres://postgres:postgres@localhost:5432/wechatmall'
}

sequelizeConn(config).then(_ =>{
    let sequelize = getConnection();
    
    const User = sequelize.define('user', {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE
    });
    
    sequelize.sync()
    .then(() => User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });
})




