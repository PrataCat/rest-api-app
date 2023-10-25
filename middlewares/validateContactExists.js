const CustomError = require("../helpers/customError");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const Contact = require("../models/contacts");

const validateContactExists = catchAsyncWrapper(async (req, res, next) => {
  const { _id: owner } = req.user;
  const { phone } = req.body;

  const contactExists = await Contact.exists({ owner, phone: phone });

  if (contactExists) {
    return next(new CustomError(400, `Contact ${phone} already exists`));
  }

  next();
});

module.exports = validateContactExists;
