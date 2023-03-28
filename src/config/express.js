import express from "express"
import userRouter from "../routes/user-router.js"

const expressApp = express()

//Routes

expressApp.use("/user", userRouter)

//midllewares

expressApp.use(express.json())


export default expressApp