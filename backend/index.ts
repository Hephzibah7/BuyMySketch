// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js"; // ✅ import your db setup
import { errorHandler } from "./src/middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(errorHandler);

const FRONTEND_URL = "http://localhost:3000";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ Connect to MongoDB
connectDB();

// ✅ Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

