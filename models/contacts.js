const { readFile, writeFile } = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const data = await readFile(contactsPath);
    const contacts = JSON.parse(data);

    return contacts;
  } catch (err) {
    console.log(err.message);
  }
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  if (!contact) {
    return null;
  }

  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactToDel = contacts.find((contact) => contact.id === contactId);
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  contacts.splice(index, 1);
  await writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contactToDel;
};

const addContact = async (body) => {
  const contacts = await listContacts();

  const newContact = { ...body, id: v4() };

  if (contacts.some((contact) => contact.phone === newContact.phone)) {
    return console.log("This contact already exists.");
  }

  contacts.push(newContact);
  await writeFile(contactsPath, JSON.stringify(contacts));

  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  contacts[index] = { ...body, id: contactId };

  await writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
