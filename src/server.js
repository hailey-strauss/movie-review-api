import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import moviesRoutes from "./routes/moviesRoute.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", authMiddleware, moviesRoutes);

// Global error handling
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
});

app.use((err, req, res, next) => {
  console.error("Middleware Error:", err.message);
  res.status(500).json({ error: "Server Error" });
});

// Export handler for Vercel
export default async function handler(req, res) {
  if (!global.mongooseConnected) {
    await connectDB();
    global.mongooseConnected = true;
  }
  return app(req, res);
}
