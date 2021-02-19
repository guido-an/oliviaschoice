const express = require('express')
const router = express.Router()
const User = require('../models/User')
const crypto = require('crypto')
const sendEmail = require('../helpers/sendEmail')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10

// SIGNUP
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  if (email === '' || password === '') {
    return res.status(400).send({ message: 'Per favore indica email e password.' })
  }

  if (firstName === '' || lastName === '') {
    return res.status(400).send({ message: 'Per favore indica nome e cognome.' })
  }

  try {
    const user = await User.findOne({ email })

    if (user !== null) {
      return res.status(400).send({ message: 'Questa email è già esistente.' })
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPass
    })
    await newUser.save()
    req.session.currentUser = newUser
    return res.status(200).send({ currentUser: newUser })
  } catch (error) {
    return res.status(400).send({ message: 'Qualcosa è andato storto' })
  }
})

// LOGIN
router.post('/login', (req, res) => {
  console.log(req.body, 'req.body')
  let currentUser

  try {
    User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        return res.status(401).send({
          errorMessage: 'Questa email non esiste'
        })
      }
      currentUser = user
      return bcrypt.compare(req.body.password, user.password)
    }).then(passwordCorrect => {
      if (passwordCorrect) {
        req.session.currentUser = currentUser
        return res.status(200).send({ message: 'Loggedin succesfully', currentUser })
      } else {
        return res.status(401).send({ errorMessage: 'Password non corretta' })
      }
    })
  } catch (error) {
    return res.status(400).send({ errorMessage: 'Password non corretta' })
  }
})

/// LOGGEDIN
router.get('/loggedin', async (req, res) => {
  console.log(req.session.currentUser, 'req.session.currentUser')
  try {
    const user = req.session.currentUser
    console.log(user, 'user')
    return res.status(200).send({ user })
  } catch (err) {
    console.log('not authorized')
    return res.status(401).send({ message: 'Unauthorized' })
  }
})

router.post('/forgotpasswordResponse', async (req, res) => {
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

  return res.status(200).send()
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
  return res.status(200).send()
})

// LOGOUT
router.get('/logout', (req, res) => {
  return req.session.destroy(err => {
    res.status(200).send({ message: 'Logged out' })
  })
})

module.exports = router
