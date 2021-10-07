require("dotenv").config();
const mongoose = require('mongoose');
const connectionString = process.env.DB_CONNECTION_STRING;

const connectDb = () => {
  mongoose.connect(
    connectionString,
    () => console.log('DB connection success!')
  );
}

module.exports = { connectDb };