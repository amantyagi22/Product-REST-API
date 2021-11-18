const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("Product", ProductSchema);
