const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");

const getCurrent = catchAsyncWrapper(async (req, res) => {
  const { email, name } = req.user;

  res.json({ email, name });
});

module.exports = getCurrent;
