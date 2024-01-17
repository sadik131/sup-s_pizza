const mongoose = require("mongoose")

const catagorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
    
}, { timestamps: true })

const Catagory = mongoose?.models?.catagory || mongoose.model("catagory", catagorySchema)

export default Catagory;