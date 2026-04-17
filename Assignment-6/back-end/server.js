const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/souledStore")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Models
const Order = mongoose.model("Order", {
  items: Array,
  total: Number,
});

const Subscriber = mongoose.model("Subscriber", {
  email: String,
});

// Routes
app.post("/order", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "Order saved" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/subscribe", async (req, res) => {
  try {
    const sub = new Subscriber(req.body);
    await sub.save();
    res.json({ message: "Subscribed" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});