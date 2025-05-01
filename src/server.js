// src/server.js
import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import moviesRoutes from "./routes/moviesRoute.js";
import authMiddleware from "./middleware/authMiddleware.js";
import cors from "cors";
import app from "./app.js"; // import the app

// Run dotenv (important!)
dotenv.config();

// Initialize DB only once
await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/movies", authMiddleware, moviesRoutes);

// Export the app as a Vercel handler
export default app;
