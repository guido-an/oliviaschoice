require('dotenv').config()

const withImages = require('next-images')

module.exports = withImages({
  env: {
    APP_API: process.env.APP_API,
    STRIPE_PK: process.env.STRIPE_PK
  },
  target: 'serverless'
})
