import express from 'express'
import userAuth from '../middlewares/authMiddlewares.js'
import { updateUserController } from '../controller/userController.js'

//router object 
const router = express.Router()

//routes
//GET USERS || get method used

//UPDATE USERS || put method used
router.put('/update-user',userAuth,updateUserController)

export default router