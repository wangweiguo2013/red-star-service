/** @format */

import logger from '../utils/logger'

// logger中间件
const extendMiddleware = async (ctx, next) => {
    ctx.sendResponse = ({data, msg, code}) => {
        ctx.body = {
            data,
            code,
            msg,
        }
    }
    try {
        await next()
    } catch (error) {
        ctx.sendResponse({
            code: 500,
            data: null,
            msg: error.toString(),
        })
    }
}

export default extendMiddleware
