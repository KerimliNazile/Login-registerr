import { Router } from 'express'
import { deleteUser, getUser, userLogin, userRegister } from '../controllers/users.js'
import { adminAuth } from '../middleware/auth.js'
const router = Router()


router.post("/register",userRegister)
router.post("/login",userLogin)
router.delete("/:id",adminAuth,deleteUser)
router.get("/",getUser)



export default router