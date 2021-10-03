/** @format */

import config from '../config'
import jwt from 'jsonwebtoken'
class loginController {
    async login(ctx) {
        ctx.body = 'login'
        const user = ctx.request.body

        if (user && user.name) {
            let payload = {
                exp: Math.floor(Date.now() / 1000) + 60 * 60, // 一小时
                name: user.name,
            }
            let token = jwt.sign(payload, config.secret)
            ctx.sendResponse({
                code: 200,
                data: {
                    token,
                    user: user.name,
                },
            })
        } else {
            ctx.sendResponse({
                code: -1,
            })
        }
    }
}

export default new loginController()
