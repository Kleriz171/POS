const express = require("express");
const router = express.Router();
const {isVerified} = require("../middleware/tokenVerification");
const { createOrder } = require("../controllers/paymentController");

router.post("/create-order",isVerified, createOrder )

module.exports = router