// src/server.js

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js"; // ✅ import the app you defined

dotenv.config();
await connectDB();

// Do NOT use app.listen() in Vercel (it deploys as serverless function)

// Optional root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Middleware Error:", err.message);
  res.status(500).json({ error: "Server Error" });
});

export default app;
