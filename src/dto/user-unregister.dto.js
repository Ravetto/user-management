import { Type } from "@sinclair/typebox"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import { passwordDTOSchema } from "./dto-types.js"

const unregisterDTOSchema = Type.Object({
    password: passwordDTOSchema,
})

const ajv = new Ajv({allErrors: true}).addKeyword("kind").addKeyword("modifier")
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
addErrors(ajv)

const validateSchema = ajv.compile(unregisterDTOSchema)

const userUnregisterDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body)

    if(!isDTOValid) return res.status(400).send({errors: validateSchema.errors.map(error => error.message)})

    next()
}

export default userUnregisterDTO