const { Joi } = require('express-validation')

const blogCreateValidation = {
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    body: Joi.string().required(),
    category: Joi.string().required().valid('obican', 'najbitniji'),
  })
}

const blogUpdateValidation = {
  body: Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    body: Joi.string(),
    category: Joi.string().valid('obican', 'najbitniji'),
  })
}

module.exports = { blogCreateValidation, blogUpdateValidation };