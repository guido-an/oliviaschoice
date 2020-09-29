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
    console.log(user)
    res.status(200).json({ user })
  } catch (err) {
    res.json({ message: 'Unauthorized' })
  }
})

// LOGOUT
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.status(200).json({ message: 'Logged out' })
  })
})

module.exports = router
