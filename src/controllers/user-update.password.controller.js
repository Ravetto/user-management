import UserModel from "../schemas/user-schema.js"
import { compare, hash } from "bcrypt"

const userUpdatePasswordController = async(req, res) => {
    const { id } = req;
    const { oldPassword, newPassword } = req.body

    const existingUserById = await UserModel.findById(id).exec()
    if(!existingUserById) return res.status(401).send("usuario no autorizado")

    const checkPassword = await compare(oldPassword, existingUserByPassword.password)
    if(!checkPassword) return res.status(401).send("usuario no autorizado")

    const hashedPassword = await hash(newPassword, 12)

    existingUserByPassword.password = hashedPassword;
    await existingUserByPassword.save()

    return res.send("password del usuario actualizado con éxito")
}

export default userUpdatePasswordController