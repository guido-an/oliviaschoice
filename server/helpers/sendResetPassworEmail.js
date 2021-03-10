const nodemailer = require('nodemailer')

 function sendResetPasswordEmail (toEmail, title, message) {
  console.log('SENDResetPasswordEMAIL')
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
    from: 'info@oliviaschoice.it',
    to: 'fede@barriola.com.uy',
    subject: title,
    text: '',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  img {-ms-interpolation-mode: bicubic;}
</style>
    <!--user entered Head Start--><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>
  body {font-family: 'Poppins', sans-serif;}
</style><!--End Head user entered-->

  </head>
  <body>
  <img src="https://oliviaschoice.vercel.app/_next/static/images/oliviaschoice-logo-mobile-0900b5d512cfa5f86c7b295144ca0e7f.png" alt="Girl in a jacket" ><br><br><br><br>
  <span style="font-size: 16px">${message}</span>
</body></html>`


   })
}

module.exports = sendResetPasswordEmail

