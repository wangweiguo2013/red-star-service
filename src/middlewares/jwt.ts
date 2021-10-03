/** @format */

import jwt from 'jsonwebtoken'
import config from '../config'

function verify(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) reject(err)
            else resolve(decoded)
        })
    })
}

const jwtMiddleware = async function (ctx, next) {
    // 将 token 中的数据解密后存到 ctx 中
    try {
        if (typeof ctx.request.headers.authorization === 'string') {
            const token = ctx.request.headers.authorization
            ctx.jwtData = await verify(token)
        } else {
            throw {code: 401, message: 'no authorization'}
        }
    } catch (err) {
        throw {code: 401, message: err.message}
    }
    next()
}

export default jwtMiddleware
