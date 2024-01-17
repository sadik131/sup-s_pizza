const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    userImag: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    number: {
        type: Number,
        require: true,
    },
    street: {
        type: String,
        require: true,
    },
    post: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const User = mongoose?.models?.User || mongoose.model("User", userSchema)

export default User;