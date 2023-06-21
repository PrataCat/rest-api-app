const { addContact } = require("../../models/contacts");

const addOne = async (req, res) => {
  const result = await addContact(req.body);

  res.status(201).json(result);
};

module.exports = addOne;
