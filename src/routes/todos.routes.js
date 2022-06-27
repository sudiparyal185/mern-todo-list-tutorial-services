const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/todos.controller");
const { privateRoute } = require("../middlewares/authMiddlewares");

router.get("/", privateRoute, getTodos);

router.post("/", privateRoute, addTodos);

router.put("/:id", privateRoute, updateTodos);

router.delete("/:id", privateRoute, deleteTodos);

module.exports = router;
