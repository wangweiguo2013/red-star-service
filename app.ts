import Koa from "koa"
import koaBody from "koa-body"
import config from "./src/config"
import publicRouter from './src/routes/public'
import privateRouter from './src/routes/private'
import setup from './src/utils/setup'
import loggerMiddleware from './src/middlewares/logger'
import extendMiddleware from './src/middlewares/extend'

const App = new Koa();

setup()

App.use(loggerMiddleware)
App.use(extendMiddleware)
// 先统一设置请求配置 => 跨域，请求头信息...

App.use(async (ctx, next) => {
    // /** 请求路径 */
    // const path = ctx.request.path;

    ctx.set({
        "Access-Control-Allow-Origin": "*", // 指定请求域，* 就是所有域名都可访问，即跨域打开
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Methods": "OPTIONS, GET, PUT, POST, DELETE",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    });


    // 如果前端设置了 XHR.setRequestHeader("Content-Type", "application/json")
    // ctx.set 就必须携带 "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization" 
    // 如果前端设置了 XHR.setRequestHeader("Authorization", "xxxx") 那对应的字段就是 Authorization
    // 并且这里要转换一下状态码
    // console.log(ctx.request.method);
    if (ctx.request.method === "OPTIONS") {
        ctx.response.status = 200;
    }
    
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message
        }
    }
});

// 使用中间件处理 post 传参 和上传图片
App.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: config.upload_img_size
    }
}));




App.use(publicRouter.routes())
App.use(privateRouter.routes())


App.on("error", (err, ctx) => {
    console.error("server error !!!!!!!!!!!!!", err, ctx);
})

App.listen(config.port, () => {
    console.log(`server is running at http://localhost:${ config.port }`);
})

