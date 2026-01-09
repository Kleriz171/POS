const config = require("../config/config")
const createHttpError = require("http-errors");


const isVerified = async (req, res, next) =>{
    try{

        const { accessToken } = req.cookies;

        if(!accessToken){
            const error = createHttpError(401, "Please provide token!")
            return next(error)
        }

        const decodeToken = jwt.verify(accessToken, config.accessTokenSecret)

        const user = await User.findById(decodeToken._id)
        if(!user){
            const error = createHttpError(401,"User not exists!")
            return next(error)
        }

        req.user = user;
        next()

    }catch(error){
        const err = create(401, "Invalid Token!")
        next(error)
    }
}

module.exports = { isVerified}