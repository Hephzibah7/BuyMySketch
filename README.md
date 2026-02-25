

# 🌟 Project Libera

**Project Libera** is a full-stack MERN marketplace that allows users to **buy and sell sketches**, helping artists connect with consumers effortlessly and build a creative sketch community.

---

## 🚀 Tech Stack

* **MongoDB**
* **Express.js**
* **React**
* **Node.js**
* **TypeScript**
* **Tailwind CSS**
* **JWT Authentication**


---

# 📌 Installation Guide

---

# 🔹 1. Git Setup (VS Code)

### Step 1

Open VS Code.

### Step 2

Create a new folder with your project name.

### Step 3

Publish repository from VS Code
(This creates a new GitHub repo with the same folder name.)

### Step 4

Initialize Git:

```bash
git init
```

### Step 5

Create a demo file and push:

```bash
git add .
git commit -m "feat: Adding demo file"
git push origin main
```

### Step 6

If push asks to pull first:

```bash
git pull origin main --rebase
```

### Step 7

Git setup complete ✅

---

# 🔹 2. Backend Setup (TypeScript + Express)

### Step 1

Initialize Node:

```bash
npm init -y
```

### Step 2

Install TypeScript:

```bash
npm install --save-dev typescript
```

### Step 3

Install Node type definitions:

```bash
npm install --save-dev @types/node
```

### Step 4

Initialize TypeScript config:

```bash
npx tsc --init
```

### tsconfig.json Configuration

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "target": "ES2022",
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```

### Step 5

Install Backend Dependencies:

```bash
npm install express dotenv cors mongoose
```

---

# 🔹 3. MongoDB Atlas Setup

1. Go to: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create organization
3. Create cluster
4. Create project
5. Copy connection string
6. Save username & password

---

# 🔹 4. Start Express Server

### `src/server.ts`

```ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

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

const mongoURI = "YOUR_MONGODB_CONNECTION_STRING";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
```

### Auto Compile TypeScript

```bash
npx tsc --watch
```

---

# 🔹 5. Tailwind CSS Setup (CRA)

### Remove Tailwind v4 (if installed)

```bash
npm uninstall tailwindcss
```

### Install Tailwind v3

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### tailwind.config.js

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

### index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Restart:

```bash
npm start
```

---

# 🔹 6. React Setup (Recommended – Vite)

```bash
npm create vite@latest
cd my-react-app
npm install
npm run dev
```

Open:
[http://localhost:5173](http://localhost:5173)

---

# 🧠 Problems Faced & Solutions (Real Development Experience)

This section reflects real-world Git & setup challenges faced during development.

---

### 1️⃣ .gitignore Not Ignoring node_modules

❌ Problem:
node_modules was still being tracked.

🔍 Reason:
It was already committed before adding `.gitignore`.

✅ Fix:

```bash
git rm -r --cached node_modules
git commit -m "chore: remove node_modules"
```

🧠 Lesson:
`.gitignore` prevents future tracking, not past mistakes.

---

### 2️⃣ Hundreds of Files Appearing in Commits

Cause: `git add .` stages everything.

✅ Always check:

```bash
git status
git diff --cached
```

---

### 3️⃣ Undoing an Unpushed Commit

```bash
git reset --soft HEAD~1
git reset HEAD~1
git reset --hard HEAD~1
```

---

### 4️⃣ Push Rejected (non-fast-forward)

```bash
git pull --rebase origin main
```

Why `--rebase`?
Keeps commit history clean.

---

### 5️⃣ Merge Conflict During Rebase

Fix manually:

```bash
git add file.ts
git rebase --continue
```

---

### 6️⃣ Windows PowerShell Blocking npm

Fix:

Open PowerShell as Admin:

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

# 🚀 Features (Phase-wise Development)

---

## 🔹 Phase 1 – Core MVP

* User authentication (Buyer & Artist)
* Artist profile creation
* Upload sketches
* Browse sketches
* View details
* Add to cart
* Place order
* Basic payment flow

---

## 🔹 Phase 2 – Ecommerce Essentials (Future work)

* Order lifecycle (CREATED → PAID → SHIPPED → COMPLETED)
* Stripe integration
* Inventory control
* Reviews & ratings
* Wishlist
* Order history

---

## 🔹 Phase 3 – Scalability (Future work)

* Redis caching
* CDN for images
* Pagination & infinite scroll
* Rate limiting
* Background jobs

---

## 🔹 Phase 4 – Advanced System Design(Future work)

* ElasticSearch
* Recommendation engine
* Analytics dashboard
* Event-driven architecture
* Notification service

---

# 🔮 Future Work

* Full payment gateway integration
* Microservices architecture
* Role-based authorization
* Admin moderation dashboard
* AI-based sketch recommendations
* Docker deployment
* CI/CD pipeline
* Production hosting (AWS / GCP)

---

# 👩‍💻 Author

**Hephzibah**
Full Stack Developer | MERN + TypeScript | System Design Enthusiast

---



