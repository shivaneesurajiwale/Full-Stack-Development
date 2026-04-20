const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: Number,
      name: String,
      price: Number,
      qty: Number,
      size: String,
      color: String
    }
  ],
  total: Number
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);