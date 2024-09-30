import {Router} from 'express'
import userController from '../controllers/user.controller.ts'

const userRoute = Router()
userRoute.post('/login', userController.login).post('/register', userController.register)

export default userRoute