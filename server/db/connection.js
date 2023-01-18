const mongoose = require("mongoose");
require("dotenv").config();

try {
    mongoose.set("strictQuery", true);
    mongoose.Com1 = mongoose.createConnection(process.env.MONGO_URI_C1, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`Connected to DB..............`);
} catch (error) {
    console.log(error);
}

module.exports = mongoose;