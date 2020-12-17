const express = require('express')
const router = express.Router()
const axios = require('axios')
const Product = require('../models/Product')

// when we call getProductsFromAPI() should update everything (no code) and set available to true
// when we call the API we just cache the products with available: true

let productsCache = []

const getProductsFromAPI = async () => {
  console.log('getting products from api')
  try {
    const response = await axios.get(process.env.API_URL)
    const productsFromAPI = response.data
    console.log(productsFromAPI.length, 'p form api')
    productsFromAPI.forEach(async (product, i) => {
      const dbProduct = await Product.findOne({
        codeArticle: product.MG66_CODART.replace(/\s/g, '')
      })
      if (!dbProduct) {
        await Product.create({
          name: product.MG87_DESCART,
          codeArticle: product.MG66_CODART.replace(/\s/g, ''),
          price: Number(product.LI10_PREZZO),
          brandName: product.MG64_DESCRMARCA,
          effectiveStock: Number(product.MG70_QGIACEFF),
          description: product.descrizioneEstesa,
          category: product.categoria
        })
      } else {
        await Product.findOneAndUpdate(
          { codeArticle: product.MG66_CODART.replace(/\s/g, '') },
          {
            available: true,
            price: Number(product.LI10_PREZZO),
            brandName: product.MG64_DESCRMARCA,
            effectiveStock: Number(product.MG70_QGIACEFF),
            description: product.descrizioneEstesa,
            category: product.categoria
          }
        )
      }
    })
  } catch (err) {
    console.log(err)
  }
}
const cacheProductsInServer = async () => {
  console.log('caching products')
  try {
    const products = await Product.find({ available: true })
    console.log(products.length, 'products available in database')
    productsCache = products
  } catch (err) {
    console.log(err)
  }
}

// 'BLO.15-0103-01'

const setAvailableToFalse = async () => {
  const products = await Product.find()
  products.forEach(async product => {
    await Product.findByIdAndUpdate({ _id: product._id }, { available: false }, { new: true })
  })
}

const updateDatabase = async () => {
  await setAvailableToFalse
  await getProductsFromAPI()
  await cacheProductsInServer()
}
updateDatabase()

// setInterval(async () => {
//   // var date = new Date()
//   // await setAvailableToFalse()
//   // await getProductsFromAPI()
//   console.log('RUNNING SET INTERVAL')
//   // await cacheProductsInServer()
//   // if (date.getHours() === 8 && date.getMinutes() === 0) {
//   //   await setAvailableToFalse()
//   //   await getProductsFromAPI()
//   //   await cacheProductsInServer()
//   // }
//   await updateDatabase()
// }, 10000) // Check each minute (to be changed)

// GET ALL PRODUCTS
router.get('/products', async (req, res) => {
  console.log(req.cookies, 'cookeis')
  try {
    res.status(200).send(productsCache)
  } catch (err) {
    res.status(500).send('Something went wrong on this call: /api/products')
  }
})

// GET SINGLE PRODUCT
router.get('/product/:id', async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id })
    console.log(product, 'product')
    res.status(200).send(product)
  } catch (err) {
    res.status(500).send('Something went wrong on this call: /api/product/:id')
  }
})

// ADD PRODUCT TO SESSION
router.get('/session-cart/:id', async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id })
    if (!req.session.products) {
      req.session.products = []
    }
    req.session.products = [...req.session.products, product]
  } catch (e) {
    console.log(e)
  }
})

// PRODUCTS PER CATEGORY
router.get('/category-products/:categoryNum', (req, res) => {
  const productsByCategory = productsCache.filter(product => {
    if (product.category[0] === req.params.categoryNum) {
      return product
    }
  })
  res.send(productsByCategory)
})

router.get('/search', async (req, res) => {
  const searchInput = req.query.searchInput
  try {
    const products = await Product.find({
      $or: [
        ({ name: { $regex: searchInput, $options: 'i' } }),
        ({ codeArticle: { $regex: searchInput, $options: 'i' } }),
        ({ brandName: { $regex: searchInput, $options: 'i' } })
      ]
    })
    res.send(products.slice(0, 30))
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong on this call: /api/search')
  }
})

module.exports = router
