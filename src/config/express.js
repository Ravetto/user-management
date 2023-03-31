import express from "express"
import userRouter from "../routes/user-router.js"

const expressApp = express()

//midllewares

expressApp.use(express.json())

//Routes

expressApp.use("/user", userRouter)

export default expressApp