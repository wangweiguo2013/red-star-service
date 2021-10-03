/** @format */

import logger from '../utils/logger'

// logger中间件
const loggerMiddleware = async (ctx, next) => {
    // 请求开始时间
    const start = Date.now()

    await next()
    // 结束时间
    const ms = Date.now() - start
    // 打印出请求相关参数

    const remoteAddress =
        ctx.headers['x-forwarded-for'] ||
        ctx.ip ||
        ctx.ips ||
        (ctx.socket && (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))

    const param = ctx.query || ctx.body

    const afterLog = `${ctx.method} ${ctx.status} ${ctx.url} 请求参数： ${JSON.stringify(
        param,
    )} 响应参数： ${JSON.stringify(ctx.body)} - ${remoteAddress} - ${ms}ms`
    logger.info(afterLog)
}

export default loggerMiddleware
