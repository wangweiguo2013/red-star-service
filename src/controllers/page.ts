import { CITEXT } from 'sequelize/types';
import pageService from '../services/page'
class PageController {
  async list(ctx){
    const { id } = ctx.params;
    const pageInfo = await pageService.list(id);
    ctx.sendResponse({ data: pageInfo, code: 200 })
  }
  async create(ctx) {
    const page = ctx.request.body;
    const pageInfo = await pageService.create(page);
    ctx.sendResponse({ data: pageInfo, code: 200 })
  }
  async delete(ctx) {
    const { id } = ctx.params;
    const pageInfo = await pageService.delete({id});
    ctx.sendResponse({ data: pageInfo, code: 200 })
  }
  async restore(ctx){
    const id = ctx.params;
    const pagInfo = await pageService.restore({id});
    ctx.body = pagInfo;
  }
}

export default new PageController();
