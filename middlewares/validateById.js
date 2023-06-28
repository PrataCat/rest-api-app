const { Types } = require("mongoose");

const CustomError = require("../helpers/CustomError");
const Contact = require("../models/contacts");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const validateById = async (req, res, next) => {
  const { contactId } = req.params;

  const idIsValid = Types.ObjectId.isValid(contactId);

  if (!idIsValid) return next(new CustomError(400, "Invalid id"));

  const contact = await Contact.findById(contactId);

  if (!contact) {
    return next(new CustomError(404, "Not found"));
  }

  req.contact = contact;

  next();
};

module.exports = catchAsyncWrapper(validateById);
