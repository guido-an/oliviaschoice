require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')

const session = require('express-session')
const Mongostore = require('connect-mongo')(session)
const cors = require('cors')

mongoose
  .connect(process.env.MONDODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

app.use(cors({
  origin: [process.env.CLIENT_URL],
  credentials: true
}))

// Middleware Setup //
app.use(logger('dev'))
app.use(session({
  secret: 'ironhack',
  httpOnly: false,
  store: new Mongostore({
    mongooseConnection: mongoose.connection
  })
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const api = require('./routes/api')
app.use('/api', api)

const authRoutes = require('./routes/auth')
app.use('/auth', authRoutes)

const stripeRoutes = require('./routes/stripe')
app.use('/', stripeRoutes)

const orderRoutes = require('./routes/order')
app.use('/', orderRoutes)

const adminRoutes = require('./routes/admin')
app.use('/admin', adminRoutes)

const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

const productRoutes = require('./routes/product')
app.use('/product', productRoutes)

module.exports = app
