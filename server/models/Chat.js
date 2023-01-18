const mongoose = require("mongoose");
const format = require("date-format");

const ChatSchema = mongoose.Schema({
    author:{
        id: {
            type: String,
            required: true
        },
        name:{
            type: String,
            required : true
        },
        img:{
            type: String,
            required: true
        }
    },
    date: { type: String, default: format.asString("at dd/MM/yyyy on hh:mm", new Date()) },
    body: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        maxlength: [200, "Name cannot be more than 20 characters"]
    },
})

module.exports = mongoose.Com1.model("Com1", ChatSchema);