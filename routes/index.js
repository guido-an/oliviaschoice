const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const User = require('../models/User')
const sendEmail = require('../helpers/sendEmail')

router.post('/create-order', async (req, res) => {
  const { _id, shippingInfo, totalPrice, paid, productsInCart } = req.body
  try {
    if (req.session.currentUser) {
      console.log('loggedin')
      const order = await Order.create({
        user: req.session.currentUser._id,
        shippingInfo,
        totalPrice,
        paid,
        productsInCart
      })
      await User.findByIdAndUpdate({ _id: req.session.currentUser._id }, { $addToSet: { orders: order } })
      res.status(200).json({ message: 'Order created', orderId: order._id })
    } else {
      console.log('not loggedion')
      const order = await Order.create({
        shippingInfo,
        totalPrice,
        paid,
        productsInCart
      })
      res.status(200).json({ message: 'Order created', orderId: order._id })
    }
  } catch (err) {
    console.error(err)
  }
})

router.post('/update-order', async (req, res) => {
  try {
    await Order.findByIdAndUpdate({ _id: req.body._id }, { paid: true })
    // sendEmail()
    res.status(200).json({ message: 'Order updated to paid' })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
