const express = require("express");
require("dotenv").config();
const todosRoutes = require("./routes/todos.routes");
const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/rest/todos", todosRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
