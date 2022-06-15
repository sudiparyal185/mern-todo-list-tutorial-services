const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/todos.controller");

router.get("/", getTodos);

router.post("/", addTodos);

router.put("/:id", updateTodos);

router.delete("/:id", deleteTodos);

module.exports = router;
