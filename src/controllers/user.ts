/** @format */

import UserService from '../services/user'
class userController {
    async register(ctx) {
        const user = ctx.request.body
        const userInfo = await UserService.create(user)
        ctx.body = userInfo
    }
}

export default new userController()
