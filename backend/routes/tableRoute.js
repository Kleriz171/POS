const express = require("express");
const { addTable, getTable, updateTable } = require("../controllers/tableController");
const router = express.Router();
const {isVerified} = require("../middleware/tokenVerification")

router.post("/", isVerified, addTable)
router.get("/", isVerified, getTable)
router.patch("/:id", isVerified, updateTable)

module.exports = router