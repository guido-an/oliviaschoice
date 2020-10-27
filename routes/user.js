const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const User = require('../models/User')

router.get('/orders', async (req, res) => {
  try {
    const user = await User.findById({ _id: req.session.currentUser._id}).populate('orders')
    res.status(200).json({ orders: user.orders })
  } catch(e){
      res.status(500).json({ message: 'You cannot access this page'})
    console.error(e)
  } 
})

router.get('/order/:id', async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id})
    res.status(200).json({ order })
  } catch(e){
      res.status(500).json({ message: 'You cannot access this page'})
    console.error(e)
  } 
})

router.post('/update', async (req, res) => {
    const { firstName, lastName, email } = req.body

    req.session.currentUser.firstName = firstName
    req.session.currentUser.lastName = lastName
    req.session.currentUser.email = email
 
     try {
       await User.findByIdAndUpdate({ _id: req.session.currentUser._id }, 
        {  firstName, 
           lastName,
           email
         })
       res.status(200).json({ message: 'User profile updated' })
     } catch(e) {
       console.error(e)
     }
   })

module.exports = router
