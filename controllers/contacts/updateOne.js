const { updateContact } = require("../../models/contacts");

const updateOne = async (req, res) => {
  const { contactId } = req.params;

  const result = await updateContact(contactId, req.body);

  res.json(result);
};

module.exports = updateOne;
