const express = require("express");
const cors = require("cors");
require("dotenv").config();
const todosRoutes = require("./routes/todos.routes");
const userRoutes = require("./routes/users.routes");
const connectDatabase = require("./database/db");

if (cluster.isMaster) {
  console.log(`Number of CPUs are ${totalCpus}`);
  console.log(`Master ${process.pid} is running`);

  // Create worker threads
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log(`Let fork another worker`);
    cluster.fork();
  });
} else {
  const PORT = process.env.PORT || 3005;
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/rest/todos", todosRoutes);
  app.use("/rest/users", userRoutes);

  app.listen(PORT, () => {
    connectDatabase();
    console.log(`Server listening on port ${PORT}`);
  });
}
