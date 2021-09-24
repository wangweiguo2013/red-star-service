import Router from 'koa-router'
import loginController from '../../controllers/login'
import userController from '../../controllers/user'
import imageController from '../../controllers/image'

const router = new Router()

router.prefix('/api')

router.post('/login', loginController.login)
router.post('/register', userController.register)

router.post('/image', imageController.upload)

export default router
