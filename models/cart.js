const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    UserId:String,
    items:[
        {
            productId:String,
            // quantity:Number,
            name:String,
            price:Number
        }
    ]
})

module.exports = mongoose.model('Cart', cartSchema)

