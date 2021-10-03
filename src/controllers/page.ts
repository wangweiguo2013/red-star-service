/** @format */

import pageService from '../services/page'
import {PAGE_ERR_CODE} from '../config/errCode'
class PageController {
    async list(ctx) {
        const {id} = ctx.params
        const {pageNum = 1, pageSize = 20} = ctx.query
        const pageInfo = await pageService.list({
            id,
            pageNum: Math.max(Number(pageNum) - 1, 0),
            pageSize: Number(pageSize) || 20,
        })
        ctx.sendResponse({data: pageInfo, code: 200})
    }
    async create(ctx) {
        const page = ctx.request.body
        const pageInfo = await pageService.create(page)
        ctx.sendResponse({data: pageInfo, code: 200})
    }
    async update(ctx) {
        const {id} = ctx.params
        const {title, pageSchema} = ctx.request.body

        const pageValues = {
            title,
            pageSchema,
        }
        const pageInfo = await pageService.update(id, pageValues)
        ctx.sendResponse({data: pageInfo, code: 200})
    }
    async delete(ctx) {
        const {id} = ctx.params
        const delCount = await pageService.delete({id})
        if (delCount === 0) {
            ctx.sendResponse({...PAGE_ERR_CODE.DEL_NOT_EXIST_ERROR})
        } else {
            ctx.sendResponse({data: delCount, code: 200, msg: `${delCount}条数据删除成功`})
        }
    }
    async restore(ctx) {
        const id = ctx.params
        const restoreCount = await pageService.restore({id})
        if (restoreCount === 0) {
            ctx.sendResponse({...PAGE_ERR_CODE.RESTORE_NOT_DELETED})
        } else {
            ctx.sendResponse({
                data: null,
                code: 200,
            })
        }
    }
}

export default new PageController()
