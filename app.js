const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/products");

const app = express();
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to mongoDB");
  }
);

// Middleware (function used with app)
app.use(express.json());

app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Backend server is running");
});
