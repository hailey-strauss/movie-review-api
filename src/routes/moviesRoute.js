// routes/moviesRoute.js
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getAllMovies, // Import the correct controller functions
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js"; // Import movie controllers

const router = express.Router();

// Apply authentication middleware to protect movie routes
router.get("/", authMiddleware, getAllMovies);
router.get("/:id", authMiddleware, getMovieById);
router.post("/", authMiddleware, createMovie);
router.put("/:id", authMiddleware, updateMovie);
router.delete("/:id", authMiddleware, deleteMovie);

export default router;
