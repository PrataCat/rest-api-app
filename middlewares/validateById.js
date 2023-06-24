const CustomError = require("../helpers/customError");
const { listContacts } = require("../models/contacts");

const validateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contacts = await listContacts();

    const contact = contacts.find((contact) => contact.id === contactId);

    if (!contact) {
      // return res.status(404).json({ message: "Not found" });
      throw new CustomError(404, "Not found");
    }

    req.contact = contact;
  } catch (err) {
    next(err);
  }
};

module.exports = validateById;
