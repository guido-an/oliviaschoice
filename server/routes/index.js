const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

router.post('/create-order', async (req, res) => {
  console.log(req.body, 'req body')
  const { _id, shippingInfo, totalPrice, paid, productsInCart } = req.body
  try {
    await Order.create({
      _id,
      shippingInfo,
      totalPrice,
      paid,
      productsInCart
    })
    res.status(200).json({ message: 'Order created' })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
