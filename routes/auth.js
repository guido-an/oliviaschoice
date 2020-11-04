const express = require('express')
const router = express.Router()
const User = require('../models/User')
const crypto = require('crypto')
const sendEmail = require('../helpers/sendEmail')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10

// SIGNUP
router.post('/signup', (req, res, next) => {
  const { firstName, lastName, email, password } = req.body

  if (email === '' || password === '') {
    res.status(400).json({ message: 'Per favore indica email e password.' })
    return
  }

  if (firstName === '' || lastName === '') {
    res.status(400).json({ message: 'Per favore indica nome e cognome.' })
    return
  }

  User.findOne({ email }, 'email', (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'Questa email è già esistente.' })
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPass
    })

    newUser.save()
      .then(() => {
        req.session.currentUser = newUser
        res.status(200).json(newUser)
      })
      .catch(err => {
        res.status(400).send({ message: 'Qualcosa è andato storto' })
      })
  })
})

// LOGIN
router.post('/login', (req, res) => {
  let currentUser
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        res.status(401).json({
          errorMessage: 'Questa email non esiste'
        })
        return
      }
      currentUser = user
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(passwordCorrect => {
      if (passwordCorrect) {
        req.session.currentUser = currentUser
        res.status(200).json({ message: 'Loggedin succesfully', currentUser })
      } else {
        res.status(401).send({
          errorMessage: 'Password non corretta'
        })
      }
    })
})

/// LOGGEDIN
router.get('/loggedin', async (req, res) => {
  try {
    const user = req.session.currentUser
    console.log(user, 'user')
    res.status(200).json({ user })
  } catch (err) {
    res.json({ message: 'Unauthorized' })
  }
})

router.post('/forgotpasswordResponse', async (req, res, next) => {
  const email = req.body.email
  const title = 'Reset Your Password'
  const cryptoToken = crypto.randomBytes(25)
  const token = cryptoToken.toString('hex')
  const user = await User.findOneAndUpdate({ email: email },
    {
      resetToken: token
    }
    , { useFindAndModify: false }
    , function (err) {
      if (err) throw err
      console.log(err)
    })
  const message = 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
  'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
   process.env.CLIENT_URL + '/user/reset/' + token + '\n\n' +
  'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  // sendEmail(email, title, message)
  console.log(message)
})

router.post('/reset/:token', async (req, res) => {
  if (req.body.password === req.body.repetPassword) {
    const token = req.params.token
    const salt = bcrypt.genSaltSync(bcryptSalt)
    const password = bcrypt.hashSync(req.body.password, salt)
    console.log(password)
    const user = await User.findOneAndUpdate({ resetToken: token },
      {
        password: password,
        resetToken: null
      }
      , { useFindAndModify: false }
      , function (err) {
        if (err) throw err
        console.log(err)
      })
    console.log(user)
  }
})

// LOGOUT
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.status(200).json({ message: 'Logged out' })
  })
})

module.exports = router
