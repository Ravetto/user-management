import { Type } from "@sinclair/typebox"
import Ajv from "ajv"
import addErrors from "ajv-errors"
import {  nameDTOSchema, surnameDTOSchema } from "./dto-types.js"

const updateDataDTOSchema = Type.Object({
    name: nameDTOSchema,
    surname: surnameDTOSchema,
})

const ajv = new Ajv({allErrors: true}).addKeyword("kind").addKeyword("modifier")
addErrors(ajv)

const validateSchema = ajv.compile(updateDataDTOSchema)

const userUpdateDataDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body)

    if(!isDTOValid) return res.status(400).send({errors: validateSchema.errors.map(error => error.message)})

    next()
}

export default userUpdateDataDTO