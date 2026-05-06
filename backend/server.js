import dotenv from "dotenv";
dotenv.config();  // ✅ load .env FIRST

import express from "express";
import cors from "cors";
import debugRoutes from "./routes/debug.js";

// ✅ Check if API key is loading
console.log("API KEY:", process.env.OPENAI_API_KEY);

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/debug", debugRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});