import { Type } from "@sinclair/typebox"

export const idDTOSchema = Type.String({
        format: "uuid",
        errorMessage: {
            Type: "el tipo no es válido, debe ser un string",
            format: "el formato no es válido, debe ser un uuid4"
        },
})

export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        Type: "el tipo no es válido, debe ser un string",
        minLength: "el name debe contener al menos 2 carácteres de longitud",
        maxLength: "el name debe contener como máximo 20 carácteres de longitud",
    },
})

export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        Type: "el tipo no es válido, debe ser un string",
        minLength: "el surname debe contener al menos 4 carácteres de longitud",
        maxLength: "el surname debe contener como máximo 50 carácteres de longitud",
    },
})
export const emailDTOSchema = Type.String({
    format: "email",
    errorMessage: {
        Type: "el tipo no es válido, debe ser un string",
        format: "el formato no es válido, debe ser un email",
    },
})
export const passwordDTOSchema = Type.String({
    format: "password",
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        Type: "el tipo no es válido, debe ser un string",
        format: "el formato no es válido, debe ser una contraseña válida",
        minLength: "el name debe contener al menos 10 carácteres de longitud",
        maxLength: "el name debe contener como máximo 25 carácteres de longitud",
    },
})
