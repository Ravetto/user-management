import UserModel from "../schemas/user-schema.js"

const userUpdateDataController = async(req, res) => {
    const { id } = req
    const { name, surname } = req.body
    
    const existingUserById = await UserModel.findById(id).exec()
    if(!existingUserById) return res.status(401).send(`credenciales incorrectas`)

    existingUserById.name = name;
    existingUserById.surname = surname;

    await existingUserById.save()

    res.send("usuario actualizado")
}

export default userUpdateDataController