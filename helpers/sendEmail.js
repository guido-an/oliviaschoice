// const nodemailer = require('nodemailer');

// function sendEmail(fromEmail, toEmail, title, message) {
//   let transporter = nodemailer.createTransport({
//     host: 'hostingssd12.netsons.net',
//     port: 465,
//     secure: true, // use TLS
//     auth: {
//       user: process.env.NODEMAILER_EMAIL,
//       pass: process.env.NODEMAILER_PSW,
//     },
//   });

//   transporter.sendMail({
//     // email to the USER
//     from: fromEmail,
//     to: toEmail,
//     subject: title,
//     text: '',
//     html: message,
//   });
// }

// module.exports = sendEmail

const nodemailer = require('nodemailer');

function sendEmail(fromEmail, toEmail, title, message) {
    console.log('SENDEMAIL')
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true, // use TLS
    auth: {
      user: 'federico.barriola@gmail.com',
      pass: 'tumadreen.4',
    },
  });

  transporter.sendMail({
    // email to the USER
    from: 'federico.barriola@gmail.com',
    to: 'carucciguido@gmail.com',
    subject: 'test email',
    text: 'This is the text',
    html: 'this is the message field',
  });
}

module.exports = sendEmail