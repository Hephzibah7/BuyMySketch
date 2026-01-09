// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import errorHandler from "./src/middleware/errorHandler.js";
import userRoutes from "./src/route/user.js"
import sellerRoutes from "./src/route/seller.js"
import paintingController from "./src/controller/painting.js";
import paintingRoutes from "./src/route/painting.js"
dotenv.config();

const app = express();
app.use(express.json());


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

app.use("/auth", userRoutes);
app.use("/",sellerRoutes);
app.use("/", paintingRoutes);

//errorHandler should be registered last
app.use(errorHandler);

// ✅ Start the server
const port = 9002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

