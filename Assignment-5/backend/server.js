const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB Connected"));

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

// Route
app.post("/contact", async (req, res) => {
  const data = new Contact(req.body);
  await data.save();
  res.send("Message saved");
});

app.listen(5000, () => console.log("Server running"));