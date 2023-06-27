const CustomError = require("../helpers/CustomError");
const Contact = require("../models/contacts");

const validateById = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId);

  if (!contact) {
    return next(new CustomError(400, "Not found"));
  }

  req.contact = contact;

  next();
};

module.exports = validateById;
