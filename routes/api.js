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

// setAvailableToFalse()
// getProductsFromAPI()

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
    res.status(200).send(product)
  } catch (err) {
    res.status(500).send('Something went wrong on this call: /api/products')
  }
})

// UPDATE SINGLE PRODUCT
router.post('/product/update', async (req, res) => {
  try {
    const code = req.body.name.slice(0,-6)
    console.log("code", code)
    const product = await Product.findOne({ codeArticle: code })
    console.log("roiduct", product)
    const arraycontainsturtles = (product.images.length);
    console.log(arraycontainsturtles, "array")
    const imgNumber = req.body.name.charAt(req.body.name.length-5)
    console.log(imgNumber, "array")
    
    if (product.images[0] != undefined){
      if (arraycontainsturtles >= imgNumber ){
        res.status(200).send("image exist")
      }else{
        console.log('existe')
        await Product.findOneAndUpdate({ codeArticle: code }, { $push: { images: req.body.url } })
        res.status(200).send("image exist")
      }
    }else{
      console.log("imagen no existe, create new")
      const updateProduct = await Product.findOneAndUpdate({ codeArticle: code }, { images: req.body.url })
        res.status(200).send(updateProduct)
    }
  } catch (err) {
    res.status(500).send('Something went wrong on this call: /api/products')
  }
})

// ADD PRODUCT TO SESSION
router.get('/session-cart/:id', async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id })
    if (!req.session.products) {
      req.session.products = []
    }
    console.log(product, 'product')
    req.session.products = [...req.session.products, product]
    console.log(req.session.products, 'req.session.products')
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
