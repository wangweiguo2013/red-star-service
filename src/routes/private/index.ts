/** @format */

import Router from 'koa-router'
import courseController from '../../controllers/course'
import jwtMiddleware from '../../middlewares/jwt'

const router = new Router()

router.prefix('/api')
router.use(jwtMiddleware)

router.get('/course', courseController.getCourse)

export default router
