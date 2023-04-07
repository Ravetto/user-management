import UserModel from "../schemas/user-schema"
import { compare } from "bcrypt"
import { SignJWT } from "jose"

const userLoginController = async(req, res) => {
    const { email, password } = req.body

    const existingUserByEmail = await UserModel.findOne({email}).exec()
    if(existingUserByEmail) return res.status(401).send()

    const checkPassword = await compare(password, existingUserByEmail.password)
    if(!checkPassword) return res.status(401).send("credenciales incorrectas")
    
    const jwtConstructor = new SignJWT({id: existingUserByEmail._id})

    const encoder = new TextEncoder()
    const jwt = await jwtConstructor
    .setProtectedHeader({"alg": "HS256", "typ": "JWT"})
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))

    return res.status(200).send({jwt})
}

export default userLoginController