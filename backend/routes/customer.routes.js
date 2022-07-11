import { Router } from 'express'
import { getRegister, getLoggedIn } from '../controller/customer.controller.js'

const router = Router()

router.post('/auth/signup', getRegister)
router.post('/auth/signin', getLoggedIn)

export default router
