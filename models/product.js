var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  id: String,
  name: String,
  price: String,
  category: String,
  details: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
