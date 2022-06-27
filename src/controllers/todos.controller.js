const Todo = require("../models/todoModel");
const User = require("../models/userModel");
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json({ todos });
  } catch (error) {
    res.status(404).json({ message: "Cannot find todos" });
  }
};

const addTodos = async (req, res) => {
  const bodyData = req.body.todo;
  if (!bodyData) {
    res.status(400).json({ message: "Wrong data" });
  }
  try {
    const todo = await Todo.create({
      todo: bodyData,
      user: req.user.id,
    });
    res.status(200).json({ todo });
  } catch (error) {
    res.status(400).json({ message: "Wrong data" });
  }
};

const updateTodos = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(400).json({ message: "Todo Id does not exist" });
    }
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User does not exist" });
    }
    if (todo.user.toString() !== user.id) {
      res.status(401).json({ message: "User not authorized" });
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(404).json({ message: "Cannot update todo" });
  }
};

const deleteTodos = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(400).json({ message: "Todo Id does not exist" });
    }
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User does not exist" });
    }
    if (todo.user.toString() !== user.id) {
      res.status(401).json({ message: "User not authorized" });
    }
    await todo.remove();
    res.status(200).json({ message: `Todo with id: ${req.params.id} deleted` });
  } catch (error) {
    req.status(404).json({ message: "Cannot delete todos" });
  }
};

module.exports = {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
};
