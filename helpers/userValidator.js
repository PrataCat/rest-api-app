const Joi = require("joi");

// const emailRegex = require("./constants");

const subscriptionList = ["starter", "pro", "business"];

const userValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    // email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
    subscription: Joi.string().valid(...subscriptionList),
  });

  return schema.validate(data);
};

module.exports = userValidator;
