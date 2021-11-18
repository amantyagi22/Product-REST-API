const router = require("express").Router();
const Product = require("../models/Product");

// Create a product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await product.updateOne({ $set: req.body });
    res.status(200).json("Product has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await product.deleteOne();
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Product
router.get("/product", async (req, res) => {
  try {
    const product = await Post.find(req.body._id);
    const allImages = await Promise.all(
      product.img.map((productId) => {
        return Post.find({ _id: productId });
      })
    );
    res.json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
