const Joi = require("joi");

const contactValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(5).max(20).required(),
  });

  return schema.validate(data);
};

module.exports = { contactValidator };
