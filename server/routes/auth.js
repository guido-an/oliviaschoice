const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10

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

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true,
  passReqToCallback: true
}))

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
