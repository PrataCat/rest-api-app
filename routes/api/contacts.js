const express = require("express");
const {
  getAll,
  getById,
  addOne,
  removeOne,
  updateOne,
} = require("../../controllers/contacts");

const { validateById, validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", getAll);

router.post("/", validateBody(), addOne);

router.get("/:contactId", validateById, getById);

router.delete("/:contactId", validateById, removeOne);

router.put("/:contactId", validateById, validateBody(), updateOne);

module.exports = router;
