// src/server.js or src/app.js

import express from "express";
import mongoose from "mongoose";
import Movie from "./models/movieModel.js"; // Import your Movie model

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// POST route to add a new movie
app.post("/movies", async (req, res) => {
  const { title, genre, releaseDate, director, review } = req.body;

  try {
    const movie = new Movie({
      title,
      genre,
      releaseDate,
      director,
      review,
    });

    await movie.save(); // Save the movie to MongoDB
    res.status(201).json(movie); // Respond with the newly created movie
  } catch (error) {
    res.status(500).json({ message: "Error adding movie", error });
  }
});

// Server setup
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
