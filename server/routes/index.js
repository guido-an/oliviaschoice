const express = require('express')
const router = express.Router()
const axios = require('axios')
const Product = require('../models/Product')

const getProducts = async () => {
  try {
    const response = await axios.get(process.env.API_URL)
    const products = response.data
    products.forEach(async product => {
      const name = product.MG87_DESCART
      await Product.create({ name })
    })
  } catch (err) {
    console.log(err)
  }
}

setInterval(function () {
  var date = new Date() // Create a Date object to find out what time it is
  if (date.getHours() === 8 && date.getMinutes() === 0) { // Check the time
    getProducts() // Update database
  }
}, 60000) // Check each minute (to be changed)

router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).send(products)
  } catch (err) {
    res.status(500).send('Something went wrong on this call: /api/products')
  }
})

module.exports = router
