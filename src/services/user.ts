/** @format */

import UserModel from '../models/UserMysql'

class UserService {
    constructor() {
        UserModel.sync()
    }
    async create(userInfo) {
        const userRecord = await UserModel.create(userInfo)
        return userRecord
    }
}

export default new UserService()
