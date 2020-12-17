const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const User = require('../models/User')
const checkIfAdmin = require('../helpers/checkIfAdmin')

// add extra validation
router.get('/get-admin', checkIfAdmin, (req, res) => {
  res.status(200).json({ admin: true })
})

router.get('/orders', checkIfAdmin, async (req, res) => {
  try {
    const orders = await Order.find({ paid: true })
    res.status(200).json({ orders: orders })
  } catch (e) {
    console.error(e)
  }
})

router.get('/list-of-users', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({ users })
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
