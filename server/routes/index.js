const express = require('express')
const router = express.Router()
const axios = require('axios')
const Product = require('../models/Product')

let productsCache = []

const cacheProductsInServer = async () => {
  const products = await Product.find()
  productsCache = products
  console.log('CACHING')
}

cacheProductsInServer()

const getProductsFromAPI = async () => {
  try {
    await Product.deleteMany()
    const response = await axios.get(process.env.API_URL)
    const productsFromAPI = response.data // Get products from API
    productsFromAPI.forEach(async product => { // Create products in database
      const name = product.MG87_DESCART
      await Product.create({ name })
    })
  } catch (err) {
    console.log(err)
  }
}

setInterval(async () => {
  var date = new Date() // Create a Date object to find out what time it is
  if (date.getHours() === 8 && date.getMinutes() === 0) { // Check the time
    await getProductsFromAPI()
    await cacheProductsInServer()
  }
}, 60000) // Check each minute (to be changed)

router.get('/api/products', async (req, res) => {
  try {
    res.status(200).send(productsCache)
  } catch (err) {
    res.status(500).send('Something went wrong on this call: /api/products')
  }
})

module.exports = router
