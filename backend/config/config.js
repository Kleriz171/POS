require("dotenv").config()

const config = Object.freeze({
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://kleri:kleri@pos-cluster.9ridmvu.mongodb.net/?appName=pos-cluster",
    nodeEnv : process.env.NODE_ENV || "development"
})

module.exports = config
