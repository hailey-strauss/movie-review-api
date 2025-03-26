// authRoute.js
import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js"; // Correct import

const router = Router();

// Route for registering a new user
router.post("/register", registerUser);

// Route for logging in a user
router.post("/login", loginUser);

export default router;
