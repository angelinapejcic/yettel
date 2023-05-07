const { Joi } = require('express-validation')

const userCreateValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('admin', 'guest', 'moderator'),
  })
}

const userUpdateValidation = {
  body: Joi.object({
    name: Joi.string(),
    lastname: Joi.string(),
    username: Joi.string(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
    email: Joi.string().email(),
    role: Joi.string().valid('admin', 'guest', 'moderator'),
  })
}

module.exports = { userCreateValidation, userUpdateValidation };