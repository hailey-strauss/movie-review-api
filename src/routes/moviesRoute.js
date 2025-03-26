import express from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js"; // Ensure correct path
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// middleware to protect these routes
router.get("/", authMiddleware, getAllMovies);
router.get("/:id", authMiddleware, getMovieById);
router.post("/", authMiddleware, createMovie);
router.put("/:id", authMiddleware, updateMovie);
router.delete("/:id", authMiddleware, deleteMovie);

export default router;
