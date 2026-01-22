const express = require("express")
const {register, login, getUserData, getUsers} = require("../controllers/userController");
const { isVerified } = require("../middleware/tokenVerification");
const router = express.Router()


router.post("/register",register);
router.post("/login",login)
router.get("/",isVerified,getUserData)
router.get("/users", getUsers)


module.exports = router