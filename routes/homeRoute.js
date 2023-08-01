// routes/home.js

const express = require("express");
const router = express.Router();

// Define the route to render the home page
router.get("/home", (req, res) => {
  return res.render("layout/main-layout");
});

module.exports = router;
