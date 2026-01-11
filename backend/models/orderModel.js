const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    custoemrDetails: {
        name: {type:String, required: true},
        phone: {type:String, required: true},
        guests: {type:Number, required: true},
    },
    orderStatus: {
        type: String,
        required: true
    },
    orderDate:{
        type: Date,
        default : Date.now()
    },
    bills: {
        total: {type: Number, required: true},
        tax: {type: Number, required: true},
        totalWithTax: {type:Numver, required:true}
    },
    items: []
}, {timestamps: true});


module.exports = mongoose.model("Order", orderSchema)

