/** @format */

class ModuleConfig {
    /** 端口号 */
    readonly port = 3020

    /** 数据库配置 */
    readonly mongoDB = {
        uri: '"mongodb+srv://root:ctBd4hEZaMSSLxBQ@cluster0.iogvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        host: 'cluster0.iogvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        user: 'root',
        password: 'ctBd4hEZaMSSLxBQ',
        /** 数据库名 */
        database: 'education', // 待会创建数据库的时候就是这个名字
        /** 链接上限次数 */
        connection_limit: 10,
    }

    readonly mysql = {
        host: '115.159.148.236',
        database: 'red-star',
        port: 3306,
        user: 'root',
        password: 'HwRmwyiBsXiPMtMt',
    }
    /** 接口前缀 */
    readonly api_prefix = '/api/v1/'

    /** 上传图片存放目录 */
    readonly image_path = '../../image/'

    readonly image_path_online = '/www/wwwroot/static.straybirds.top/img/'
    readonly image_path_url = 'https://static.straybirds.top/img/'

    /** 上传图片大小限制 */
    readonly upload_img_size = 5 * 1024 * 1024

    /**
     * 前端上传图片时约定的字段
     * @example
     * const formData = new FormData()
     * formData.append("img", file)
     * XHR.send(formData)
     */
    readonly upload_img_name = 'img'

    /** 用户临时表 */
    readonly user_file = 'public/user.json'

    /** token 长度 */
    readonly token_size = 28

    /** token 格式错误提示文字 */
    readonly token_tip = '无效的token'

    readonly log_path = process.cwd() + '/logs/logs.log'

    readonly secret = 'education'
}

/** 项目配置 */
const config = new ModuleConfig()

export default config
