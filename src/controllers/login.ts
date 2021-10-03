/** @format */

import config from '../config'
import jwt from 'jsonwebtoken'
class loginController {
    async login(ctx) {
        ctx.body = 'login'
        const user = ctx.request.body
        const tokenExpiresTime = 1000 * 1 // 登陆过期时间

        if (user && user.name) {
            let payload = {
                exp: Math.floor(Date.now() / 1000) + 60, //(60 * 60),
                name: user.name,
            }
            let token = jwt.sign(payload, config.secret)

            ctx.body = {
                user: user.name,
                code: 1,
                token,
            }
        } else {
            ctx.body = {
                code: -1,
            }
        }
    }
}

export default new loginController()
