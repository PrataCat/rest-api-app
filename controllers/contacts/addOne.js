const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Contact = require("../../models/contacts");

const addOne = catchAsyncWrapper(async (req, res, next) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
});

module.exports = addOne;
