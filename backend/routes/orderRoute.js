const express = require("express")
const { isVerified } = require("../middleware/tokenVerification")
const { addOrder, getOrders, getOrderById, updateOrder } = require("../controllers/orderController")
const router  = express.Router()

router.post("/", isVerified, addOrder)

router.get("/", isVerified, getOrders)

router.get("/:id", isVerified, getOrderById)

router.patch("/:id", isVerified, updateOrder)

module.exports = router