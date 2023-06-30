const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Contact = require("../../models/contacts");

const removeOne = catchAsyncWrapper(async (req, res) => {
  const { contactId } = req.params;

  await Contact.findByIdAndDelete(contactId);

  res.json({ message: "Contact deleted" });
});

module.exports = removeOne;
