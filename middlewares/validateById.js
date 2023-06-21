const { listContacts } = require("../models/contacts");

const validateById = async (req, res, next) => {
  const { contactId } = req.params;

  const contacts = await listContacts();

  const contact = contacts.find((contact) => contact.id === contactId);

  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }

  req.contact = contact;

  next();
};

module.exports = validateById;
