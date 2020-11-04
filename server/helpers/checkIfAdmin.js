
const checkIfAdmin = (req, res, next) => {
  console.log(req.session.currentUser, 'admin user')
  if (req.session.currentUser && req.session.currentUser.admin === true) {
    next()
  } else {
    res.json({ message: 'You cannot access this page' })
  }
}

module.exports = checkIfAdmin
