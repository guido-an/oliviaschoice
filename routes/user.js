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
  const { firstName, lastName, telephone, email, password, VAT, streetAddress, city, province, zipCode } = req.body

  const updatedShippingInfo = {
    streetAddress,
    city,
    province,
    zipCode
  }
  console.log(req.body, 'req.body')

  req.session.currentUser.firstName = firstName
  req.session.currentUser.lastName = lastName
  req.session.currentUser.email = email
  req.session.currentUser.telephone = telephone
  req.session.currentUser.password = password
  req.session.currentUser.VAT = VAT
  req.session.currentUser.shippingInfo = updatedShippingInfo

  try {
    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    await User.findByIdAndUpdate({ _id: req.session.currentUser._id },
      {
        firstName,
        lastName,
        email,
        telephone,
        password: hashPass,
        VAT,
        shippingInfo: updatedShippingInfo
      })
    res.status(200).json({ message: 'User profile updated' })
  }

  // try {
  //   await User.findByIdAndUpdate({ _id: req.session.currentUser._id },
  //     {
  //       firstName,
  //       lastName,
  //       email
  //     })
  //   res.status(200).json({ message: 'User profile updated' })
  // }

  catch (e) {
    console.error(e)
  }
})

module.exports = router
