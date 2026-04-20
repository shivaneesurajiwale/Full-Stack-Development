require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const orderRoutes = require("./routes/order");
const subscribeRoutes = require("./routes/subscribe");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/souledStore";

mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log("✅ MongoDB Connected");
  console.log(`📍 Connected to: ${mongoURI}`);
})
.catch(err => {
  console.error("❌ MongoDB Connection Failed:", err.message);
  console.log("\n📝 To set up MongoDB locally:");
  console.log("   Option 1: Use MongoDB Atlas (Cloud) - https://www.mongodb.com/cloud/atlas");
  console.log("   Option 2: Install local MongoDB - https://docs.mongodb.com/manual/installation/");
  console.log("\n   Or update MONGODB_URI in .env file with your connection string");
});

// Routes
app.use("/api/order", orderRoutes);
app.use("/api/subscribe", subscribeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});