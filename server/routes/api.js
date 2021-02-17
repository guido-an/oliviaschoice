const express = require('express')
const router = express.Router()
const axios = require('axios')
const Product = require('../models/Product')
const { ToadScheduler, SimpleIntervalJob, AsyncTask } = require('toad-scheduler')

// when we call getAndCreateProductsFromAPI() should update everything (no code) and set available to true
// when we call the API we just cache the products with available: true

let productsCache = []

const getAndCreateProductsFromAPI = async () => {
  try {
    const response = await axios.get(process.env.API_URL)
    const productsFromAPI = response.data
    console.log(productsFromAPI.length, 'products form API')
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
  try {
    const products = await Product.find({ available: true })
    console.log(products.length, 'products available in database')
    const productsWithStock = products.filter(product => product.effectiveStock >= 1)
    const productsWithPrice = productsWithStock.filter(product => product.price >= 0.1)
    productsCache = productsWithPrice
    console.log('productsCache.length', productsCache.length)
  } catch (err) {
    console.error(err)
  }
}

const setAvailableToFalse = async () => {
  try {
    const products = await Product.find()
    products.forEach(async product => {
      await Product.findByIdAndUpdate(
        { _id: product._id },
        { available: false },
        { new: true }
      )
    })
  } catch (err) {
    console.error(err)
  }
}

// updateDatabase()

// setInterval(async () => {
//   // var date = new Date()
//   // await setAvailableToFalse()
//   // await getAndCreateProductsFromAPI()
//   console.log('RUNNING SET INTERVAL')
//   // await cacheProductsInServer()
//   // if (date.getHours() === 8 && date.getMinutes() === 0) {
//   //   await setAvailableToFalse()
//   //   await getAndCreateProductsFromAPI()
//   //   await cacheProductsInServer()
//   // }
//   await updateDatabase()
// }, 10000) // Check each minute (to be changed)

// GET ALL PRODUCTS
router.get('/products', async (req, res) => {
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

// UPDATE SINGLE PRODUCT
router.post('/product/update', async (req, res) => {
  try {
    const code = req.body.name.slice(0, -6)
    console.log('code', code)
    const product = await Product.findOne({ codeArticle: code })
    console.log('roiduct', product)
    const arraycontainsturtles = (product.images.length)
    console.log(arraycontainsturtles, 'array')
    const imgNumber = req.body.name.charAt(req.body.name.length - 5)
    console.log(imgNumber, 'array')

    if (product.images[0] != undefined) {
      if (arraycontainsturtles >= imgNumber) {
        res.status(200).send('image exist')
      } else {
        await Product.findOneAndUpdate({ codeArticle: code }, { $push: { images: req.body.url } })
        res.status(200).send('image exist')
      }
    } else {
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
  res.status(200).json(productsByCategory)
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

const updateDatabase = async () => {
  await setAvailableToFalse
  await getAndCreateProductsFromAPI()
  await cacheProductsInServer()
  console.log(new Date())
  return new Date()
}

const scheduler = new ToadScheduler()

// const task = new AsyncTask(
//   'simple task',
//   () => {
//     return updateDatabase()
//       .then((result) => {
//         console.log(result, 'result')
//       })
//   },
//   (err) => {
//     console.error(err)
//   }
// )
// const job = new SimpleIntervalJob({ seconds: 5 }, task)

// scheduler.addSimpleIntervalJob(job)

// when stopping your app
// scheduler.stop()

module.exports = router
