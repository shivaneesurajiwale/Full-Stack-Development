const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Save order
router.post("/", async (req, res) => {
  console.log("Order BODY:", req.body); // debug

  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    res.json({ message: "Order saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders (for demo)
router.get("/", async (req, res) => {
  const data = await Order.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;