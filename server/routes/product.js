const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/product-of-the-month', async (req, res) => {
  console.log(req.body.codeArticle, 'code article ')

  try {
    const codeArticleExist = await Product.findOne({ codeArticle: req.body.codeArticle })
    if (!codeArticleExist) {
      res.status(400).json({ message: "Codice articolo non esistente nel database dell'applicazione" })
      return
    }

    const allProducts = await Product.find()
    allProducts.forEach(async product => {
      try {
        await Product.findByIdAndUpdate(
          { _id: product._id },
          { productOfTheMonth: false }
        )
      } catch (err) {
        console.error(err)
      }
    })
    const product = await Product.findOneAndUpdate(
      { codeArticle: req.body.codeArticle },
      { productOfTheMonth: true }
    )
    res.status(200).json({ message: 'We have a new product of the month:', product })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router
