const express = require("express");
const app = express();
require("./app");

// Start the server
const port = process.env.PORT || 3000;
app.listen(6010, () => {
  console.log(`Server started on port ${6010}`);
});
