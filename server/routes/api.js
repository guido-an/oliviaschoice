const express = require('express')
const router = express.Router()
const axios = require('axios')
const Product = require('../models/Product')
var mcache = require('memory-cache')
const { ToadScheduler, SimpleIntervalJob, AsyncTask } = require('toad-scheduler')

var cache = (duration) => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url
    const cachedBody = mcache.get(key)
    if (cachedBody) {
      console.log('sending cache')
      res.send(cachedBody)
    } else {
      console.log('cache not found')
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000)
        res.sendResponse(body)
      }
      next()
    }
  }
}

const getAndCreateProductsFromAPI = async () => {
  try {
    // Call external API
    const response = await axios.get(process.env.API_URL)
    const productsFromAPI = response.data
    console.log(productsFromAPI.length, 'products from API')
    // It CREATES the product if doesn't exists in database
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
        // OR it UPDATES it (with new info coming from external API)
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

// GET SINGLE PRODUCT
router.get('/product/:id', cache(10), async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id })
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
router.get('/session-cart/:id', cache(10), async (req, res) => {
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
router.get('/category-products/:categoryNum', cache(10), async (req, res) => {
  const products = await Product.find()
  const productsByCategory = products.filter(product => {
    if (product.category[0] === req.params.categoryNum && product.price > 0 && product.effectiveStock > 0 && product.available) {
      return product
    }
  })
  res.status(200).json(productsByCategory)
})

router.get('/search', cache(10), async (req, res) => {
  const searchInput = req.query.searchInput
  try {
    const products = await Product.find({
      $or: [
        ({ name: { $regex: searchInput, $options: 'i' } }),
        ({ codeArticle: { $regex: searchInput, $options: 'i' } }),
        ({ brandName: { $regex: searchInput, $options: 'i' } })
      ]
    })
    const fitleredProducts = products.filter(product => {
      if (product.price > 0 && product.effectiveStock > 0 && product.available) {
        return product
      }
    })
    res.send(fitleredProducts.slice(0, 30))
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong on this call: /api/search')
  }
})

const updateDatabase = async () => {
  await setAvailableToFalse()
  await getAndCreateProductsFromAPI()
}

const scheduler = new ToadScheduler()

const task = new AsyncTask(
  'simple task',
  () => {
    return updateDatabase()
      .then((result) => {
        console.log(result, 'result')
      })
  },
  (err) => {
    console.error(err)
  }
)
const job = new SimpleIntervalJob({ seconds: 86400 }, task)

scheduler.addSimpleIntervalJob(job)

// when stopping your app
// scheduler.stop()

module.exports = router
