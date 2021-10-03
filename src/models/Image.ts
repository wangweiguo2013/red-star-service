/** @format */

import {ModelAttributes, DataTypes} from 'sequelize'
import {defineModel} from '../utils/db'

const UserModel: ModelAttributes = {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        comment: '自增id',
    },
    file_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    file_size: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '文件大小',
    },
    file_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: '文件类型',
    },
    origin_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },

    url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}
export default defineModel('image', UserModel)
