const express = require("express");
const {
  getAll,
  getById,
  addOne,
  removeOne,
  updateOne,
  updateStatusContact,
} = require("../../controllers/contacts");

const {
  validateById,
  validateBody,
  validateFavorite,
  validateContactExists,
} = require("../../middlewares");

const router = express.Router();

router.get("/", getAll);

router.post("/", validateBody(), validateContactExists, addOne);

router.get("/:contactId", validateById, getById);

router.delete("/:contactId", validateById, removeOne);

router.put("/:contactId", validateById, validateBody(), updateOne);

router.patch(
  "/:contactId/favorite",
  validateById,
  validateFavorite(),
  updateStatusContact
);

module.exports = router;
