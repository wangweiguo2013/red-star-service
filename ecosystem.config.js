/** @format */

// https://pm2.keymetrics.io/docs/usage/application-declaration/
module.exports = {
    apps: [
        {
            name: 'API',
            script: 'app.ts',
            interpreter: './node_modules/.bin/ts-node',
            // 解释器参数 -P 表示项目路径，会自动使用项目的 tsconfig.json
            // interpreter_args: '-r tsconfig-paths/register',
            instances: 1,
            cwd: './',
            autorestart: true,
            ignore_watch: [
                // 不用监听的文件
                'node_modules',
                'logs',
            ],
            max_memory_restart: '1G',
            env_pro: {
                NODE_ENV: 'production',
                REMOTE_ADDR: '',
                watch: false,
            },
            env_dev: {
                NODE_ENV: 'development',
                REMOTE_ADDR: '',
                watch: true,
            },
            env_test: {
                NODE_ENV: 'test',
                REMOTE_ADDR: '',
                watch: false,
            },
            error_file: '/www/err.log', // 错误日志文件，必须设置在项目外的目录，这里为了测试
            out_file: '/www/info.log', //  流水日志，包括 console.log 日志，必须设置在项目外的目录，这里为了测试
            max_restarts: 10,
        },
    ],
}
