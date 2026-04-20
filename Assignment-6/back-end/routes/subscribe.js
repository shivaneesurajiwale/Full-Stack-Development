const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// Save email
router.post("/", async (req, res) => {
  console.log("SUBSCRIBE BODY:", req.body); // 👈 ADD THIS

  try {
    const newSub = new Subscriber(req.body);
    await newSub.save();

    console.log("Saved:", newSub); // 👈 ADD THIS

    res.json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all emails
router.get("/", async (req, res) => {
  const data = await Subscriber.find();
  res.json(data);
});

module.exports = router;