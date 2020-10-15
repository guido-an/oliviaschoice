const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  shippingInfo: Object,
  totalPrice: Number,
  paid: Boolean,
  productsInCart: Array
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
