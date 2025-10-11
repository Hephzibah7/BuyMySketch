# Project Libera

Project-Libera- Allows the users to buy and sell sketches, helps the artist to meet with the consumers effortlessly. Sketch community

---

## Tech Stack

MERN + TypeScript + Tailwind CSS

---

## Installation

Git Setup in your vscode  
Step 1 - Go to your vscode  
Step 2 - Create a new folder as the name of your project  
Step 3 - Publish your repositary (this creates a new repositary in your github profile with the same name as your folder name)  
Step 4 - Initialize your repositary using this command- git init  
Step 5 - Create a demo file and push that demo file using following commands  

git add .  
git commit -m "feat:Adding a demo file"  
git push origin main  

Step 6 - After pushing if it tells you to pull then use this command  

git pull origin main --unwanted files  

Step 7 - Now your github setup is completed  

---

## Backend SetUp

Step 1 - npm init -y  
Step 2 - npm install --save-dev typescript  
Step 3 - Configure typescript- npm tsc -init  
Your tscconfig file should look like this -


"compilerOptions": {

"rootDir": "./src",
"outDir": "./dist",
"module": "nodenext",
"esModuleInterop": true,
"moduleResolution": "nodenext",
"target": "ES2022",    
"strict": true,
"forceConsistentCasingInFileNames": true,    
"skipLibCheck": true,

  }

  
Step 4 - Install following dependencies -  
Type this commands in your vscode command line -  

npm I express dotenv cors mongoose  

---

## MongoDB Atlas SetUp

Step 1 - Go to https://www.mongodb.com/cloud/atlas  
Step 2 - Create an organization  
Step 3 - Create a cluster  
Step 4 - Create a new project  
Step 5 - Save the connection string along with the username and password  

---

## Start your Express Server

// src/server.ts

```typescript
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js"; // ✅ import your db setup

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
const mongoURI =
  "your conncetion string";
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

// ✅ Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
