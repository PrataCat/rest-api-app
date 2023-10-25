const { subscriptionValidator } = require("../helpers");
const CustomError = require("../helpers/customError");

const validateSubscription = () => {
  const func = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      next(new CustomError(400, "Missing field subscription"));
    }

    const { error } = subscriptionValidator(req.body);

    if (error) {
      next(new CustomError(400, "Subscription is not valid"));
    }

    next();
  };

  return func;
};

module.exports = validateSubscription;
