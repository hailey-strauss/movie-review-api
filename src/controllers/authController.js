// authController.js

import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error });
  }
};

// Login User - Controller function to handle user login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};
