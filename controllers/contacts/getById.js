const { getContactById } = require("../../models/contacts");

const getById = async (req, res) => {
  const { contactId } = req.params;

  const result = await getContactById(contactId);

  res.json(result);
  // const { contact } = req;
  // res.json(contact);
};

module.exports = getById;
