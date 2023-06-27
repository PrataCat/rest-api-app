const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Contact = require("../../models/contacts");

const getById = catchAsyncWrapper(async (req, res) => {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId).select("-__v");

  res.json(contact);
});

module.exports = getById;
