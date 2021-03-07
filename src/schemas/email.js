const Joi = require('joi');

const emailSchema = Joi.object().keys({
  name: Joi.string(),
  email: Joi.string().email()
});

module.exports = emailSchema;