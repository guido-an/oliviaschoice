const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// This is a sample test API key. Sign in to see examples pre-filled with your key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = async items => {
  console.log(items.length, 'items')
  let totalPrice = 0
  try {
    // with forEach doesn't work
    for (let i = 0; i < items.length; i++) {
      const product = await Product.findById({ _id: items[i]._id })
      console.log(product, 'product')
      const productPrice = product.price * items[i].boughtQuantity
      console.log(productPrice, 'productPrice')
      console.log(items[i].boughtQuantity, 'product boughtQuantity')
      totalPrice = totalPrice + productPrice
    }
    console.log(totalPrice * 100, 'totale price')
    return totalPrice * 100
  } catch (e) {
    console.log(e)
  }
}

router.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(items),
    currency: 'eur'
  })
  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

module.exports = router
