const CustomError = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const Contact = require("../models/contacts");

const validateById = catchAsyncWrapper(async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId);

  if (!contact) {
    return next(new CustomError(404, "Not found"));
  }

  req.contact = contact;

  next();
});

module.exports = validateById;
