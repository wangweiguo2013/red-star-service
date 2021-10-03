/** @format */

import Router from 'koa-router'
import loginController from '../../controllers/login'
import userController from '../../controllers/user'
import imageController from '../../controllers/image'
import pageController from '../../controllers/page'

const router = new Router()

router.prefix('/api')

router.post('/login', loginController.login)
router.post('/register', userController.register)

router.post('/image', imageController.upload)

router.post('/page', pageController.create)
router.get('/page', pageController.list)
router.get('/page/:id', pageController.list)
router.put('/page/:id', pageController.update)
router.delete('/page/:id', pageController.delete)
router.post('/page/:id/restore', pageController.restore)

router.put('/page', pageController.create)

export default router
