const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(MONGO_URL, ()=> {
  console.log('connected to mongodb')
})