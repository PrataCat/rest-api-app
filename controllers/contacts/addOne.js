const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Contact = require("../../models/contacts");

const addOne = async (req, res) => {
  const result = await Contact.create(req.body).select("-__v");

  res.status(201).json(result);
};

module.exports = catchAsyncWrapper(addOne);
