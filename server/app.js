require('dotenv').config()
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')

const session = require('express-session')
const Mongostore = require('connect-mongo')(session)
const cors = require('cors')
const isDevMode = process.env.NODE_ENV === 'development';

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())

const whitelist = process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : []
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS - Custom Error' + origin))
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200,
  httpOnly: false,
  credentials: true
}
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

// Middleware Setup
app.use(logger('dev'));

if (!isDevMode) {
  app.set('trust proxy', 1); // trust first proxy
}

app.use(session({
  name: 'obcured.sid',
  secret: 'ironhack',
  resave: false,
  proxy: true,
  saveUninitialized: true,
  unset: 'destroy',
  cookie: {
    sameSite: 'None',
    secure: !isDevMode,
    httpOnly: false,
    maxAge: 6 * 60 * 60 * 1000
  },
  store: new Mongostore({
    mongooseConnection: mongoose.connection
  })
}));

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
