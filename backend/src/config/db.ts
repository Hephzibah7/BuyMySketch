// src/config/db.ts
import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://hephzibah:hephzibah@cluster0.m0aeeba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Function to connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // stop the app if DB connection fails
  }
};
