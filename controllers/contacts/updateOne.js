const Contact = require("../../models/contacts");

const updateOne = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    },
    { new: true }
  );

  res.json(result);
};

module.exports = updateOne;
