const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S=/.test(v)
            },
            message: "Email must be valid!"
        }
    },
    phone:{
        type: Number,
        required: true,
        validate:{
            validator: function (v){
                return /\d{10}/.test(v)
            },
            message: "Phone must be 10 digits"
        }
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, {timestamps : true})

module.exports = mongoose.model("User", userSchema)