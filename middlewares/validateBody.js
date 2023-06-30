const { contactValidator } = require("../helpers");
const CustomError = require("../helpers/CustomError");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const validateBody = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { name, email, phone } = req.body;

    if (!name && !email && !phone) {
      return res.status(400).json({ message: "missing fields" });
    }

    const { error } = contactValidator(req.body);

    if (error) {
      const field = error.details[0].path[0];

      return next(new CustomError(400, `Missing required '${field}' field`));
    }

    next();
  });

  return func;
};

module.exports = validateBody;
