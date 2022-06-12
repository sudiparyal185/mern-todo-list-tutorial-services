const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3005;
const app = express();

app.use("/", (req, res) => {
  res.status(200).send("<h1>Hello World!!!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
