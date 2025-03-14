// routes/movieRoutes.js
import express from "express";
import Movie from "../models/movieModel.js";

const router = express.Router();

// POST a new movie
router.post("/", async (req, res) => {
  try {
    const { title, genre, releaseDate, director, review } = req.body;
    const movie = new Movie({ title, genre, releaseDate, director, review });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error adding movie", error });
  }
});

// GET all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error });
  }
});

export default router;
