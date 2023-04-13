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
import userUpdateDataController from "../controllers/user-update.data.controller.js"
import userProfileController from "../controllers/user-profile.controller.js"
import userUpdateEmailController from "../controllers/user-update.email.controller.js"
import userUpdatePasswordController from "../controllers/user-update.password.controller.js"

const userRouter = Router()


userRouter.get("/profile", userJWTDTO, userProfileController)

userRouter.post("/register", userRegisterDTO, userRegisterController)

userRouter.post("/login", userLoginDTO, userLoginController)

userRouter.patch("/update-data", userJWTDTO, userUpdateDataDTO, userUpdateDataController)

userRouter.patch("/update-email", userJWTDTO, userUpdateEmailDTO, userUpdateEmailController)

userRouter.patch("/update-password", userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController)

userRouter.delete("/unregister", userJWTDTO, userUnregisterDTO)




export default userRouter