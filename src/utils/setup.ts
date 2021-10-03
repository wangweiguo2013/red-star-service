/** @format */

import logger from '../utils/logger'
import mongoose from 'mongoose'
import config from '../config'

const url = config.mongoDB.uri

export default function (): Promise<void> {
    return new Promise((resolve, reject) => {
        const mongo = mongoose.createConnection(url)

        // 错误
        mongo.on('error', function (err) {
            logger.error(err)
            reject(err)
        })
        // 开启
        mongo.once('open', function () {
            logger.info('mongo is opened')
            resolve()
        })
    })
}
