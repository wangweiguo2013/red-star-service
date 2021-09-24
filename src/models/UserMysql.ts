import { ModelAttributes, DataTypes } from 'sequelize'
import { defineModel } from '../utils/db'

const UserModel: ModelAttributes = {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        comment:"自增id"
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    nick_name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    gender: {
        type: DataTypes.STRING(35),
        allowNull:true
    },
    birth_day: {
        type: DataTypes.DATE
    },
    password: {
        type: DataTypes.STRING(255)
    }
}
export default defineModel('user', UserModel)