const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  console.log("BODY:", req.body);

  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    console.log("Before User.create");

const user = await User.create({
  username,
  email,
  password,
});

console.log("After User.create");
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
  console.log("ERROR START");
  console.log(error);
  console.log("ERROR END");

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await user.matchPassword(password);
const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  {
    expiresIn: process.env.JWT_EXPIRES_IN,
  }
);
    
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
  success: true,
  message: "Login Successful",
  token,
  data: {
    id: user._id,
    username: user.username,
    email: user.email,
  },
});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getCurrentUser = async (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};