// Import required modules
const express = require("express");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const path = require("path");

// Create an Express application
const app = express();

// Middleware for parsing request bodies (optional)
app.use(express.static("public"));
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
app.use(express.static(path.join(__dirname, "public")));

// Routes
const userRoute = require("./routes/userRoute");
const homeRoute = require("./routes/homeRoute");

app.use("/api", homeRoute);
app.use("/api/user", userRoute);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
