import httpServer from "./config/http.js"
import connectDB from "./config/db.js"
import "./config/env.js"

const bootstrap = async() => {
    await connectDB(process.env.MONGODB_URL)

    httpServer.listen(process.env.PORT, () => { console.log(`servidor escuchando en el puerto: ${process.env.PORT}`)})
}

bootstrap()