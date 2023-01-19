const mongoose = require("mongoose");
require("dotenv").config();

try {
    mongoose.set("strictQuery", true);
    mongoose.Com1 = mongoose.createConnection(process.env.MONGO_URI_C1, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.Com2 = mongoose.createConnection(process.env.MONGO_URI_C2, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.Com3 = mongoose.createConnection(process.env.MONGO_URI_C3, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.Community = mongoose.createConnection(process.env.MONGO_URI_COMMUNITY, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.Users = mongoose.createConnection(process.env.MONGO_URI_USERS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`Connected to DB..............`);
} catch (error) {
    console.log(error);
}

module.exports = mongoose;