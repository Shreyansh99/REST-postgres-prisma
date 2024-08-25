import {Router} from "express"
import { createUser } from "../controllers/UserAuth.js"

const router = Router()


router.post('/signup', createUser)
// router.post('/login',loginUser)
// router.post('/logout',logout)




export default router