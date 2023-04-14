import UserModel from "../schemas/user-schema.js"
import { compare } from "bcrypt"

const userUpdateEmailController = async(req, res) => {
    const { id } = req;
    const { email, password } = req.body

    const existingUserById = await UserModel.findById(id).exec()
    if(!existingUserById) return res.status(401).send({errors: ["usario no autorizado"]})

    const checkPassword = await compare(password, existingUserById.password)
    if(!checkPassword) return res.status(401).send({errors: ["usario no autorizado"]})

    existingUserById.email = email;
    await existingUserById.save()

    return res.send("email del usuario actualizado con éxito")
}

export default userUpdateEmailController