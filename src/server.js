import express from "express";
import connectDB from "../src/config/db.js"; // Ensure correct path
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js"; // Authentication routes
import moviesRoutes from "./routes/moviesRoute.js"; // Movie routes
import authMiddleware from "./middleware/authMiddleware.js"; // Middleware to protect routes

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Protect movie routes with authMiddleware
app.use("/api/movies", authMiddleware, moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
