import { Router } from "express"
import userRegisterDTO from "../dto/user-register.dto.js"

const userRouter = Router()


userRouter.get("/profile", (req, res) => {})

userRouter.post("/register", userRegisterDTO)

userRouter.post("/login", (req, res) => {})

userRouter.patch("/update-data", (req, res) => {})

userRouter.patch("/update-email", (req, res) => {})

userRouter.patch("/update-password", (req, res) => {})

userRouter.delete("/unregister", (req, res) => {})




export default userRouter