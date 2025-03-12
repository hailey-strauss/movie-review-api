import express from "express";
import mongoose from "mongoose";
import moviesRoute from "./routes/moviesRoute.js";

const app = express();
const PORT = process.env.PORT || 3001;

const mongoURI =
  "mongodb+srv://hstrauss3:hailey@moviereviews.9htn7.mongodb.net/?retryWrites=true&w=majority&appName=moviereviews"; // Ensure this is correctly formatted

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB:", err);
});

app.use("/api/movies", moviesRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
