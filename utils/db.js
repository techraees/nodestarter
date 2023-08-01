const mongoose = require("mongoose");

// Replace 'YOUR_MONGODB_URI' with your actual MongoDB connection URI
const mongodbURI = "mongodb://127.0.0.1:27017/sampleTemplate";

// Connect to MongoDB
const connectDB = async () => {
  try {
    mongoose.connect(mongodbURI);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connectDB;
