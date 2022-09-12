import { Router } from'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.get('/', loginRequired, userController.index)
router.post('/', userController.create)
router.get('/:id?', userController.read)
router.put('/:id?', userController.update)
router.delete('/:id?', userController.delete)

export default router
