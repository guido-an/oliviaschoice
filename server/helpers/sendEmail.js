const nodemailer = require('nodemailer')
const templates = require('../templates/template')

function displayProducts (order) {
  let productsToDisplay = ''
  order.productsInCart.forEach((product) => {
    productsToDisplay += `
       <div style="display: flex; width: 350px">
        <img src='${product.images && product.images[0]}'></img>
        <p style="margin-right:40px">${product.name}</p>
        <p style="margin-right:20px">x${product.boughtQuantity}</p>
        <p>${product.boughtQuantity * product.price}€<p>
        </div>
        <div style="border-bottom: 2px solid #f7f7f7; width:100%; height: 20px; margin-bottom: 40px"></div>
        `
  })
  return productsToDisplay
}
function sendEmail (order) {
  const productsToDisplay = displayProducts(order)

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
    html: templates.templateExample(order, productsToDisplay)
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
