/**
 * 日志按日期切割 https://github.com/log4js-node/log4js-node/issues/765
 *
 * @format
 */

import fs from 'fs'
import path from 'path'
import log4js from 'log4js'
import config from '../config'

const logsDir = path.parse(config.log_path).dir
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

log4js.configure({
    appenders: {
        console: {
            type: 'console',
            category: 'console',
        },
        everything: {
            type: 'dateFile',
            pattern: 'yyyy-MM-dd',
            keepFileExt: true, //
            maxLogSize: 1024 * 1024 * 1, //1024 * 1024 * 1 = 1M
            backups: 2, //
            alwaysIncludePattern: true, //
            daysToKeep: 3, //
            filename: 'logs/run.log',
        },
    },
    categories: {
        default: {
            appenders: ['everything', 'console'],
            level: 'ALL',
        },
    },
    pm2: false,
})

const logger = log4js.getLogger('[Default]')

export default logger
