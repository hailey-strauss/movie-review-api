import Movie from "../models/movieModel.js";

// Get all movies
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single movie by ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new movie review
export const createMovie = async (req, res) => {
  const { title, genre, releaseDate, director, review } = req.body;

  // Validate required fields
  if (!title || !genre) {
    return res.status(400).json({ message: "Title and Genre are required" });
  }

  try {
    const newMovie = new Movie({ title, genre, releaseDate, director, review });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error adding movie:", error);
    res.status(500).json({ message: "Error adding movie", error });
  }
};

// Update a movie by ID
export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the update against the schema
    });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Send a success message along with the updated movie
    res.status(200).json({
      message: "Movie updated successfully",
      updatedMovie, // Include the updated movie data in the response
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update movie", error });
  }
};

// Delete a movie
export const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie)
      return res.status(404).json({ message: "Movie not found" });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
