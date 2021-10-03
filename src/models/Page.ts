/** @format */

import {ModelAttributes, DataTypes, NOW} from 'sequelize'
import {defineModel} from '../utils/db'

const PageModel: ModelAttributes = {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        comment: '自增id',
    },
    pageSchema: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    // status: {
    //     type: DataTypes.STRING(255),
    //     defaultValue: 'new'
    // }
}
export default defineModel('page', PageModel)
