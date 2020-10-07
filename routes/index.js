const express = require('express')
const router = express.Router()
const axios = require('axios')
const Product = require('../models/Product')

// when we call getProductsFromAPI() should update everything (no code) and set available to true
// when we call the API we just cache the products with true

let productsCache = []

const cacheProductsInServer = async () => {
  try {
    const products = await Product.find({ available: true })
    productsCache = products
  } catch (err) {
    console.log(err)
  }
}

cacheProductsInServer()
const getProductsFromAPI = async () => {
  console.log('getProductsFromAPI()')
  try {
    const response = await axios.get(process.env.API_URL)
    const productsFromAPI = response.data
    productsFromAPI.forEach(async product => {
      const dbProduct = await Product.findOne({
        codeArticle: product.MG66_CODART.replace(/\s/g, '')
      })
      if (!dbProduct) {
        await Product.create({
          name: product.MG87_DESCART,
          codeArticle: product.MG66_CODART.replace(/\s/g, ''),
          price: Number(product.LI10_PREZZO),
          brandName: product.MG64_DESCRMARCA,
          effectiveStock: Number(product.MG70_QGIACEFF)
        })
      } else {
        await Product.findOneAndUpdate(
          { name: product.MG87_DESCART },
          {
            available: true,
            price: Number(product.LI10_PREZZO),
            brandName: product.MG64_DESCRMARCA,
            effectiveStock: Number(product.MG70_QGIACEFF)
          }
        )
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// 'BLO.15-0103-01'

const setAvailableToFalse = async () => {
  console.log('setAvailableToFalse')
  const products = await Product.find()
  products.map(async product => {
    await Product.findByIdAndUpdate({ _id: product._id }, { available: false }, { new: true })
  })
}

setAvailableToFalse()
getProductsFromAPI()

// setInterval(async () => {
//   var date = new Date()
//   await setAvailableToFalse()
//   await getProductsFromAPI()
//   console.log('running set interval')
//   // await cacheProductsInServer()
//   // if (date.getHours() === 8 && date.getMinutes() === 0) {
//   //   await setAvailableToFalse()
//   //   await getProductsFromAPI()
//   //   await cacheProductsInServer()
//   // }
// }, 600) // Check each minute (to be changed)

router.get('/api/products', async (req, res) => {
  try {
    res.status(200).send(productsCache)
  } catch (err) {
    res.status(500).send('Something went wrong on this call: /api/products')
  }
})

module.exports = router
