require('dotenv').config()

const withImages = require('next-images')

module.exports = withImages({
  env: {
    APP_API: 'https://oliviaschoice.herokuapp.com/',
    STRIPE_PK: process.env.STRIPE_PK
  },
  target: 'serverless'
})
