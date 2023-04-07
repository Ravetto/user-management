import { Router } from "express"
import userRegisterDTO from "../dto/user-register.dto.js"
import userLoginDTO from "../dto/user-login.dto.js"
import userUpdateDataDTO from "../dto/user-update.data.dto.js"
import userUpdateEmailDTO from "../dto/user-update.email.dto.js"
import userUpdatePasswordDTO from "../dto/user-update.password.dto.js"
import userUnregisterDTO from "../dto/user-unregister.dto.js"
import userJWTDTO from "../dto/user-jwt.dto.js"
import userRegisterController from "../controllers/user-register.controller.js"
import userLoginController from "../controllers/user-login.controller.js"

const userRouter = Router()


userRouter.get("/profile", userJWTDTO)

userRouter.post("/register", userRegisterDTO, userRegisterController)

userRouter.post("/login", userLoginDTO, userLoginController)

userRouter.patch("/update-data", userJWTDTO, userUpdateDataDTO, )

userRouter.patch("/update-email", userJWTDTO, userUpdateEmailDTO)

userRouter.patch("/update-password", userJWTDTO, userUpdatePasswordDTO)

userRouter.delete("/unregister", userJWTDTO, userUnregisterDTO)




export default userRouter