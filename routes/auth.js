const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')

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
      res.status(400).json({ message: 'The email already exists' })
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      email,
      password: hashPass
    })

    newUser.save()
      .then(() => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).send({ message: 'Something went wrong' })
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
          errorMessage: "The email doesn't exist"
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
          errorMessage: 'Incorrect password'
        })
      }
    })
})

// LOGOUT
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.status(200).json({ message: 'Logged out' })
  })
})

module.exports = router
