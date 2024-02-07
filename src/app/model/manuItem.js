const mongoose = require("mongoose")

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    discription: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    catagory: {
        type: String,
        require: true
    }


}, { timestamps: true })

const MenuItem = mongoose?.models?.menuItem || mongoose.model("menuItem", MenuSchema)

export default MenuItem;