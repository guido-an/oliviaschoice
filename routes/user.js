const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const User = require('../models/User')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10

router.get('/orders', async (req, res) => {
  try {
    const user = await User.findById({ _id: req.session.currentUser._id }).populate('orders')
    res.status(200).json({ orders: user.orders })
  } catch (e) {
    res.status(500).json({ message: 'You cannot access this page' })
    console.error(e)
  }
})

router.get('/order/:id', async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id })
    res.status(200).json({ order })
  } catch (e) {
    res.status(500).json({ message: 'You cannot access this page' })
    console.error(e)
  }
})

router.post('/update', async (req, res) => {
  const { firstName, lastName, telephone, email, VAT, streetAddress, city, province, zipCode } = req.body
  const updatedShippingInfo = {
    streetAddress,
    city,
    province,
    zipCode
  }

  req.session.currentUser.firstName = firstName
  req.session.currentUser.lastName = lastName
  req.session.currentUser.email = email
  req.session.currentUser.telephone = telephone
  req.session.currentUser.VAT = VAT
  req.session.currentUser.shippingInfo = updatedShippingInfo

  try {
    await User.findByIdAndUpdate({ _id: req.session.currentUser._id },
      {
        firstName,
        lastName,
        email,
        telephone,
        VAT,
        shippingInfo: updatedShippingInfo
      })
    res.status(200).json({ message: 'User profile updated' })
  } catch (e) {
    console.error(e)
  }
})

// GET SINGLE USER
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).populate('orders')
    res.status(200).json({ user })
  } catch (e) {
    res.status(500).json({ message: 'You cannot access this page' })
    console.error(e)
  }
})

module.exports = router
