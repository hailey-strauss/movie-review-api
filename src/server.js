import express from "express";
import connectDB from "../src/config/db.js"; // Ensure correct path
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js"; // Auth routes
import moviesRoutes from "./routes/moviesRoute.js"; // Movie routes
import authMiddleware from "./middleware/authMiddleware.js"; // Middleware
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Authentication routes (no middleware needed)
app.use("/api/auth", authRoutes);

// Protected movie routes
app.use("/api/movies", authMiddleware, moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
