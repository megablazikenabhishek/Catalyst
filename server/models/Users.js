const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    id: String,
    img: String,
})

module.exports = mongoose.Users.model("Users", UserSchema);