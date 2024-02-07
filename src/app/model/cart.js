const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Cart = mongoose?.models?.cart || mongoose.model("cart", cartSchema)

export default Cart;