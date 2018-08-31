const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  id: Number,
  stock: Number,
  basePrice: Number
})

const productModel = mongoose.model('Product', Product)
module.exports = productModel
