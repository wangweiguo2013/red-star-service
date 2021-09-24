class Controller {
    sendResponse({data, error}: {data?: any,error?: any}){
        
        let response: any = {}
    if (data) {
      // 正常请求
      response = {
        code: 200,
        data,
        msg: 'SUCCESS_MSG',
      }
    } else {
      if (error && error.code) {
        const {
          code = 500
          msg = 'ERROR_MSG.SYSTEM_ERROR',
        } = error
        response = {
          code,
          msg,
        }
      } else {
        response = {
          code: 500,
          msg: typeof error === 'string' ? error : error.toString(),
        }
      }
    }
    ctx.body = response
    ctx.logger.info(
      `[result=${response.code === SUCCESS_CODE}||url=${
        ctx.originalUrl
      }]request finished`,
    )
  }}
}