const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Contact = require("../../models/contacts");

const addOne = catchAsyncWrapper(async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
});

module.exports = addOne;
