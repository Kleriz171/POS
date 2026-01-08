const mongoose = require("mongoose")
const config = require("./config")

const connectDB = async () =>{
    try{
        const con = await mongoose.connect(config.MONGODB_URI)
        console.log("connected to DB" + con.connection.host)
    }
    catch(error){
        console.log(error.message)
        process.exit
    }
}

module.exports = connectDB