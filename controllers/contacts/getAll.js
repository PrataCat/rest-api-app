const Contact = require("../../models/contacts");

const getAll = async (req, res) => {
  const result = await Contact.find().select("-__v");

  res.status(200).json(result);
};

module.exports = getAll;
