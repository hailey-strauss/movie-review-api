// src/server.js

import express from "express";
import cors from "cors"; // If you're using CORS
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"; // Correct path to your authRoute.js

dotenv.config(); // To load environment variables

const app = express();

// Middleware
app.use(express.json()); // To parse JSON requests
app.use(cors()); // If you need CORS enabled (for API requests from frontend)

// Register routes
app.use("/api/auth", authRoute); // Make sure you're using "/api/auth" as the base URL

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
