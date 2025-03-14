import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
  },
  director: {
    type: String,
  },
  review: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
