import { Router } from 'express'
import { createUser, getAllUsers } from '../controllers/users.controllers.js'

const router = Router()

router.post('/user', createUser)
router.get('/all', getAllUsers)

export default router