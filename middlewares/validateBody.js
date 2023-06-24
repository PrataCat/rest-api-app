const { contactValidator } = require("../helpers/contactValidator");
const CustomError = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const validateBody = catchAsyncWrapper(async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name && !email && !phone) {
    return res.status(400).json({ message: "missing fields" });
  }

  const { error } = contactValidator(req.body);

  if (error) {
    const field = error.details[0].path[0];
    const message = `Missing required '${field}' field`;

    return next(new CustomError(400, message));
    // throw new CustomError(400, message);
  }
});

module.exports = validateBody;
