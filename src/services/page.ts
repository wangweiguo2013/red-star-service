/** @format */

import PageModel from '../models/Page'

class PageService {
    constructor() {
        PageModel.sync()
    }

    async list(id?: string) {
        let records
        if (id) {
            records = await PageModel.findOne({where: {id}})
        } else {
            records = await PageModel.findAll()
        }
        return records
    }

    async create(page) {
        const pageRecord = await PageModel.create(page)
        return pageRecord
    }

    async delete(page) {
        const pageRecord = await PageModel.destroy({where: page})
        return pageRecord
    }
    async restore(page) {
        const pageRecord = await PageModel.restore(page)
        return pageRecord
    }
}

export default new PageService()
