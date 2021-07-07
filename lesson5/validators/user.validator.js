const Joi = require('joi');
const regex = require('../constants/regexEmail');

module.exports = {
    userCreate: Joi.object().keys({
    name: Joi.string().required().min(3).max(23),
    email: Joi.string().required(regex.EMAIL_REGEXP),
    password: Joi.string().min(8).max(256).required(),
  })
};
