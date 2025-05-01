import express from "express";
import Movie from "./models/movieModel.js";
import authRoutes from "./routes/authRoute.js";
import authMiddleware from "./middleware/authMiddleware.js";
import moviesRoutes from "./routes/moviesRoute.js";
import cors from "cors";

app.use(express.json());
app.use(cors());

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// POST route to add a new movie (unauthenticated)
app.post("/movies", async (req, res) => {
  const { title, genre, releaseDate, director, review } = req.body;

  try {
    const movie = new Movie({ title, genre, releaseDate, director, review });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error adding movie", error });
  }
});

// Auth routes (public)
app.use("/api/auth", authRoutes);

// Protected movie routes
app.use("/api/movies", authMiddleware, moviesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("App Error:", err.message);
  res.status(500).json({ error: "Server Error" });
});

export default app;
