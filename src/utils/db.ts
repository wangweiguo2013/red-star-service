import { Sequelize, ModelAttributes } from "sequelize";
import config from '../config'
const { mysql } = config

const sequelizeManager = new Sequelize(mysql.database, mysql.user, mysql.password, {
    dialect: 'mysql',
    host: mysql.host,
    port: 3306,
    define: {
      underscored: true,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      freezeTableName: true,
      timestamps: true,
    },
    logging: false,
  }
)
export default sequelizeManager

export function defineModel(tableName, model: ModelAttributes) {
  return sequelizeManager.define(tableName, model, {
      freezeTableName: true, // model对应的表名将与model名相同
      tableName: tableName,
      paranoid: true, //TODO:含义
  })
}

  