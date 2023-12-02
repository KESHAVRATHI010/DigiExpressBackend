const mongoose = require("mongoose");

const electronicsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  specifications: {
    type: [String],
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  warranty: {
    type: {
      duration: Number,
      description: String,
    },
  },
});

const Electronics = mongoose.model("product", electronicsSchema);

module.exports = Electronics;
