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

// DELETE route for deleting a movie by ID
app.delete("/api/movies/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = await Movie.findByIdAndDelete(movieId);

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route for retrieving a movie by ID
app.get("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id); // Get movie by ID
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT route to update a movie by ID
app.put("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { title, genre, releaseDate, director, review } = req.body;

  try {
    // Find the movie by ID and update the fields
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        genre,
        releaseDate,
        director,
        review,
      },
      { new: true } // This will return the updated document
    );

    // If the movie is not found
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Respond with the updated movie
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
