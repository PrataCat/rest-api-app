const CustomError = require("../helpers");
const { listContacts } = require("../models/contacts");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const validateById = catchAsyncWrapper(async (req, res, next) => {
  const { contactId } = req.params;

  const contacts = await listContacts();

  const contact = contacts.find((contact) => contact.id === contactId);

  if (!contact) {
    // return res.status(404).json({ message: "Not found" });
    return next(new CustomError(404, "Not found"));
  }

  req.contact = contact;
});

module.exports = validateById;
