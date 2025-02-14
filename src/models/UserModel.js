const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
    },
    fullName: {
        type:String,
        required: true,
        trim: true,
    },
    gender:{
        type:String,
        required: true,
        trim: true,
    },
    email: {
        type:String,
        required:true,
        trim: true,
        unique: true,
    },
    DateOfBirth:{
        type: String,
        required: true,
    },
    country: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('user',userSchema);