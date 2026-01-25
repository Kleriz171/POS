const express = require("express")
const {register, login, getUserData, getUsers, logOut} = require("../controllers/userController");
const { isVerified } = require("../middleware/tokenVerification");
const router = express.Router()


router.post("/register",register);
router.post("/login",login)
router.get("/",isVerified,getUserData)
router.get("/users", getUsers)
router.post("/logout",isVerified, logOut)


module.exports = router