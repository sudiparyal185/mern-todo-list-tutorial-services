const registerUser = async (req, res) => {
  res.status(200).json({ message: "Register User" });
};

const loginUser = async (req, res) => {
  res.status(200).json({ message: "Login User" });
};

module.exports = {
  registerUser,
  loginUser,
};
