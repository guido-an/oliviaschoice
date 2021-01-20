require('dotenv').config()

const withImages = require('next-images')

module.exports = withImages({
  env: {
    APP_API: 'http://localhost:5000',
    STRIPE_PK: process.env.STRIPE_PK
  },
  target: 'serverless'
})
