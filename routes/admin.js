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
    const orders = await  Order.find({ paid: true })
    res.status(200).json({ orders: orders })
  } catch(e){
    console.error(e)
  } 
})


// router.get('/total-ordes', (req, res) => {
//   if (req.session.currentUser && req.session.currentUser.admin === true) {
//     res.json({ message: 'aca hay ordenes' })
//   } else {
//     res.json({ message: 'aca no hay ordenes' })
//   }
// })
module.exports = router
