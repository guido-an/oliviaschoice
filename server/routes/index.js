const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

router.post('/create-order', async (req, res) => {
  const { _id, shippingInfo, totalPrice, paid, productsInCart } = req.body
  try {
    const order = await Order.create({
      _id,
      shippingInfo,
      totalPrice,
      paid,
      productsInCart
    })
    console.log(order, 'order')
    res.status(200).json({ message: 'Order created', orderId: order._id })
  } catch (err) {
    console.error(err)
  }
})

router.post('/update-order', async (req, res) => {
  try {
    await Order.findByIdAndUpdate({ _id: req.body._id }, { paid: true })
    res.status(200).json({ message: 'Order updated to paid' })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
