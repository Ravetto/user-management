import UserModel from "../schemas/user-schema.js";
import { compare } from "bcrypt"

const userUnregisterController = async(req, res) => {
    const { id } = req;
    const { password } = req.body

    const existingUserById = await UserModel.findById(id).exec()
    if(!existingUserById) return res.status(401).send({errors: ["usuario no autorizado"]})

    const checkPassword = await compare(password, existingUserById.password) 
    if(!checkPassword) return res.status(401).send({errors: ["credenciales incorrectas"]})

    await existingUserById.deleteOne()

    return res.send("usuario eliminado con éxito")
}

export default userUnregisterController