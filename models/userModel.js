const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120,
  },
  // Add any other properties you need for the user
});

// Create the User model using the user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
