const nodemailer = require('nodemailer')
const templates = require('../templates/template')

function sendEmail (order) {
  let totalProducts

  const test = order.productsInCart.forEach(product => {
    totalProducts += `<p>${product.name}</p>`
  })
  console.log('SENDING EMAIL')
  const transporter = nodemailer.createTransport({
    host: 'hostingweb31.netsons.net',
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'info@oliviaschoice.it',
      pass: process.env.NODEMAILER_PSW
    }
  })

  transporter.sendMail({
    // email to the USER
    from: 'info@oliviaschoice.it',
    to: 'carucciguido@gmail.com',
    subject: 'Grazie per il tuo ordine',
    text: '',
    html: templates.templateExample('thanks bla bla bla', totalProducts)
  }, (error, result) => {
    if (error) return console.error(error)
    return console.log(result)
  })
}

module.exports = sendEmail

// const nodemailer = require('nodemailer')

// function sendEmail (toEmail, title, message) {
//   console.log('SENDEMAIL')
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     secure: true, // use TLS
//     auth: {
//       user: 'service email',
//       pass: '*****'
//     }
//   })

//   transporter.sendMail({
//     // email to the USER
//     from: '',
//     to: '',
//     subject: 'test email',
//     text: 'This is the text',
//     html: 'this is the message field'
//   })
// }

// module.exports = sendEmail
