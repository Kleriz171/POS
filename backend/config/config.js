require("dotenv").config()

const config = Object.freeze({
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI,
    nodeEnv : process.env.NODE_ENV || "development",
    accesTokenSecret: process.env.accesTokenSecret
})

module.exports = config
