const express = require("express");
const router = express.Router();
const Product = require("../models/product.js");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/:id", getproduct, (req, res) => {
  res.json(res.product);
});

router.post("/", async (req, res) => {
  const product = new Product({
    category: req.body.category,
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    specifications: req.body.specifications,
    image: req.body.image,
    description: req.body.description,
    warranty: req.body.warranty,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error saving product:", err);
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getproduct, async (req, res) => {
  if (req.body.category != null) {
    res.product.category = req.body.category;
  }
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.brand != null) {
    res.product.brand = req.body.brand;
  }
  if (req.body.model != null) {
    res.product.model = req.body.model;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  if (req.body.specifications != null) {
    res.product.specifications = req.body.specifications;
  }
  if (req.body.image != null) {
    res.product.image = req.body.image;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }
  if (req.body.warranty != null) {
    res.product.warranty = req.body.warranty;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getproduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Deleted product" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
async function getproduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Cannot find Product" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}
module.exports = router;
