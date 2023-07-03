const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");

const getCurrent = catchAsyncWrapper(async (req, res) => {
  const { email, subscription } = req.user;

  res.json({ email, subscription });
});

module.exports = getCurrent;
