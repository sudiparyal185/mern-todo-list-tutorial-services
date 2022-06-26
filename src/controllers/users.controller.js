const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please check the required fields" });
  }
  try {
    // Check if email already exist in database
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "Email already exists" });
    }
    // Hash the password before creating a user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      res.status(201).json({
        __id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid user data" });
  }
};

const loginUser = async (req, res) => {
  res.status(200).json({ message: "Login User" });
};

module.exports = {
  registerUser,
  loginUser,
};
