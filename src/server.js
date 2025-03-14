import express from "express";
import connectDB from "../src/config/db.js"; // Ensure correct path
import dotenv from "dotenv";
import Movie from "./models/movieModel.js"; // Import Movie model

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// GET movies route
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movie.find(); // Fetch all movies from the database
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//  POST movies route (to add a movie)
app.post("/api/movies", async (req, res) => {
  const { title, genre, releaseDate, director, review } = req.body;

  if (!title || !genre) {
    return res.status(400).json({ message: "Title and Genre are required" });
  }

  try {
    const newMovie = new Movie({
      title,
      genre,
      releaseDate,
      director,
      review,
    });

    await newMovie.save(); // Save the new movie to the database

    res.status(201).json(newMovie); // Respond with the new movie data
  } catch (error) {
    res.status(500).json({ message: "Failed to save movie" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
