const express = require("express");
require("dotenv").config();
const todosRoutes = require("./routes/todos.routes");
const connectDatabase = require("./database/db");

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/rest/todos", todosRoutes);

app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server listening on port ${PORT}`);
});
