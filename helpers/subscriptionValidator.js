const Joi = require("joi");

const subscriptionList = ["starter", "pro", "business"];

const subscriptionValidator = (data) => {
  const schema = Joi.object({
    subscription: Joi.string()
      .valid(...subscriptionList)
      .required(),
  });

  return schema.validate(data);
};

module.exports = subscriptionValidator;
