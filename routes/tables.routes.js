import { Router } from 'express'
import { createTable } from '../controllers/tables.controllers.js'
import { authUser } from '../middlewares/login.middleware.js'

const router = Router()

router.post('/tables', authUser, createTable)

export default router