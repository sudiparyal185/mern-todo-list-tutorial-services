const getTodos = (req, res) => {
  res.status(200).json({ message: "Get Todos" });
};

const addTodos = (req, res) => {
  res.status(200).json({ message: "Add Todos" });
};

const updateTodos = (req, res) => {
  res.status(200).json({ message: "Update Todos" });
};

const deleteTodos = (req, res) => {
  res.status(200).json({ message: "Delete Todos" });
};

module.exports = {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
};
