import { Router } from "express"
import userRegisterDTO from "../dto/user-register.dto.js"
import userLoginDTO from "../dto/user-login.dto.js"
import userUpdateDataDTO from "../dto/user-update.data.dto.js"
import userUpdateEmailDTO from "../dto/user-update.email.dto.js"
import userUpdatePasswordDTO from "../dto/user-update.password.dto.js"
import userUnregisterDTO from "../dto/user-unregister.dto.js"

const userRouter = Router()


userRouter.get("/profile")

userRouter.post("/register", userRegisterDTO, (req, res) => {res.send()})

userRouter.post("/login", userLoginDTO)

userRouter.patch("/update-data", userUpdateDataDTO)

userRouter.patch("/update-email", userUpdateEmailDTO)

userRouter.patch("/update-password", userUpdatePasswordDTO)

userRouter.delete("/unregister", userUnregisterDTO)




export default userRouter