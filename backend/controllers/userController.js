const createHttpError = require("http-errors")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/config")

const register = async (req, res, next) => {
    try {
        const { name, phone, email, password, role } = req.body
        if (!name || !phone || !email || !password || !role) {
            const error = createHttpError(400, "All fields must be filled")
            return next(error)
        }
        const isUserPresent = await User.findOne({ email })
        if (isUserPresent) {
            const error = createHttpError(400, "User already exists")
            return next(error)
        }

        const user = { name, phone, email, password, role };
        const newUser = User(user)
        await newUser.save()

        res.status(201).json({ success: true, message: "New user created", data: newUser })


    } catch (error) {
         next(error)
    }


}

const login = async (req, res, next) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            const error = createHttpError(400, "all fields are required!")
            return next(error)
        }
        const isUser = await User.findOne({ email })
        if (!isUser) {
            const error = createHttpError(401, "Invalid Credentials")
            return next(error)
        }

        const isMatch = await bcrypt.compare(password, isUser.password)
        if (!isMatch) {
            const error = createHttpError(401, "Invalid Credentials")
            return next(error)
        }

        const accesToken = jwt.sign({_id: isUser._id}, config.accesTokenSecret, {
            expiresIn: "20d"
        })

        res.cookie('accesToken', accesToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
            sameSite: 'none',
            secure: true
        })
        res.status(200).json({succes:true, message: "User login successfully!",
            data: isUser
        })

    } catch (error) {
        next(error)
    }
}

const getUserData = async (req,res,next)=>{

}

module.exports = { register, login,getUserData }