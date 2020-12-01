const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  codeArticle: String,
  quantity: String,
  available: { type: Boolean, default: true },
  price: Number,
  brandName: String,
  effectiveStock: Number,
  description: String,
  category: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
