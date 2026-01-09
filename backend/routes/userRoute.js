const express = require("express")
const {register, login, getUserData} = require("../controllers/userController");
const { isVerified } = require("../middleware/tokenVerification");
const router = express.Router()


router.post("/register",register);
router.post("/login",login)
router.get("/",isVerified,getUserData)


module.exports = router