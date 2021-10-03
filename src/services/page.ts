/** @format */

import PageModel from '../models/Page'

const PAGE_ATTRIBUTES = ['id', 'title', 'pageSchema']
class PageService {
    constructor() {
        PageModel.sync()
    }

    async list({id, pageNum, pageSize}) {
        let records
        if (id) {
            records = await PageModel.findOne({where: {id}, attributes: PAGE_ATTRIBUTES})
        } else {
            records = await PageModel.findAndCountAll({
                attributes: PAGE_ATTRIBUTES,
                limit: pageSize,
                offset: pageSize * pageNum,
            })
        }
        return records
    }

    async create(page) {
        const pageRecord = await PageModel.create(page)
        return pageRecord
    }

    async update(id, values) {
        const pageRecord = await PageModel.update(values, {
            where: {id},
        })
        return pageRecord
    }

    async delete(page) {
        const pageRecord = await PageModel.destroy({where: page})
        return pageRecord
    }

    async restore(page): Promise<number> {
        const restoreCount = (await PageModel.restore(page)) as unknown
        return restoreCount as number
    }
}

export default new PageService()
