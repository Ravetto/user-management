import { Type } from "@sinclair/typebox"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import addFormats from "ajv-formats"

const registerDTOSchema = Type.Object({
    _id: Type.String({
        format: "uuid",
        errorMessage: {
            Type: "el tipo no es válido, debe ser un string",
            format: "el formato no es válido, debe ser un uuid4"
        },
    }),
    name: Type.String({
        minLength: 2,
        maxLength: 20,
        errorMessage: {
            Type: "el tipo no es válido, debe ser un string",
            minLength: "el name debe contener al menos 2 carácteres de longitud",
            maxLength: "el name debe contener como máximo 20 carácteres de longitud",
        },
    }),
    surname: Type.String({
        minLength: 4,
        maxLength: 50,
        errorMessage: {
            Type: "el tipo no es válido, debe ser un string",
            minLength: "el surname debe contener al menos 4 carácteres de longitud",
            maxLength: "el surname debe contener como máximo 50 carácteres de longitud",
        },
    }),
    email: Type.String({
        format: "email",
        errorMessage: {
            Type: "el tipo no es válido, debe ser un string",
            format: "el formato no es válido, debe ser un email",
        },
    }),
    password: Type.String({
        format: "password",
        minLength: 10,
        maxLength: 25,
        errorMessage: {
            Type: "el tipo no es válido, debe ser un string",
            format: "el formato no es válido, debe ser una contraseña válida",
            minLength: "el name debe contener al menos 10 carácteres de longitud",
            maxLength: "el name debe contener como máximo 25 carácteres de longitud",
        },
    }),
})

const ajv = new Ajv({allErrors: true}).addKeyword("kind").addKeyword("modifier")
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
addFormats(ajv, ["email", "uuid"])
addErrors(ajv)

const validateSchema = ajv.compile(registerDTOSchema)

const userRegisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body)

    if(!isDTOValid) return res.status(400).send(ajv.errorsText(validateSchema.errors, { separator: "/n" }))

    next()
}

export default userRegisterDTO