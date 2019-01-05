const Sequelize = require('sequelize');

let sequelize = null;

module.exports.getConnection = () => {
  return sequelize;
}


module.exports.connect = async (config) => {

  sequelize = new Sequelize(config.DATABASE_URI, {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false
    },
    // 请参考 Querying - 查询 操作符 章节
    operatorsAliases: false
  });
  return sequelize;
}