import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  director: { type: String, required: true },
  review: { type: String, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
