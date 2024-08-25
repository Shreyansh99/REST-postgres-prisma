import {Router} from "express"
import userAuthRoute from "./userAuthRoute.js"

const router = Router()

router.use('/api/auth/user', userAuthRoute)

export default router   