const { getRecords, getRecord, createRecord, updateRecord, deleteRecord } = require("../controllers/recordsController");
const express = require("express");
const router = express.Router();

router.get("/", getRecords);
router.get("/:id", getRecord);
router.post("/", createRecord);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);

module.exports = router;