const { removeContact } = require("../../models/contacts");

const removeOne = async (req, res) => {
  const { contactId } = req.params;

  await removeContact(contactId);

  res.json({ message: "Contact deleted" });
};

module.exports = removeOne;
