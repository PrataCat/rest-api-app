const Contact = require("../../models/contacts");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    {
      favorite: req.body.favorite,
    },
    { new: true }
  );

  res.status(200).json(result);
};

module.exports = updateStatusContact;
