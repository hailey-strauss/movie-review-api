// src/app.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Movie from "./models/movieModel.js";
import authRoutes from "./routes/authRoute.js";
import moviesRoutes from "./routes/moviesRoute.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express(); // ✅ Must come BEFORE any app.use() or app.post()

app.use(express.json());
app.use(cors());

// Example route
app.post("/movies", async (req, res) => {
  try {
    const { title, genre, releaseDate, director, review } = req.body;
    const movie = new Movie({ title, genre, releaseDate, director, review });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error adding movie", error });
  }
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", authMiddleware, moviesRoutes);

export default app;
