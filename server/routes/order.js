const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const User = require('../models/User')
const sendEmail = require('../helpers/sendEmail')
var request = require('request')

const postOrderToShippyPro = (order) => {
  const { firstName, lastName, streetAddress, city, zipCode, telephone, email, additionalNotes } = order.shippingInfo
  const date = Date.now()
  const dateString = date.toString()
  const actualDate = Number(dateString.slice(0, 10))

  const items = order.productsInCart.map(product => {
    const item = {
      title: product.name,
      imageurl: '',
      quantity: product.boughtQuantity,
      price: product.price,
      sku: product.codeArticle
    }
    return item
  })
  const body = {
    Method: 'PutOrder',
    Params: {
      to_address: {
        name: `${firstName} ${lastName}`,
        company: '',
        street1: streetAddress,
        street2: '',
        city: city,
        state: '',
        zip: zipCode,
        country: 'IT',
        phone: telephone,
        email: email
      },
      parcels: [
        {
          length: 5,
          width: 5,
          height: 5,
          weight: 10
        }
      ],
      items: items,
      TransactionID: order._id,
      Date: actualDate,
      Currency: 'EUR',
      ItemsCount: order.productsInCart.length,
      ContentDescription: 'Oliviaschoice',
      Total: order.totalPrice,
      Status: 'Paid',
      APIOrdersID: 870,
      ShipmentAmountPaid: 23.5,
      Incoterm: 'DAP',
      BillAccountNumber: '',
      PaymentMethod: 'Stripe',
      ShippingService: 'Expedited',
      Note: additionalNotes
    }
  }

  request({
    method: 'POST',
    url: 'https:www.shippypro.com/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.SHIPPYPRO_AUTH
    },
    body: JSON.stringify(body)
    // body: '{  "Method": "PutOrder",  "Params": {    "to_address": {      "name": "John Doe",      "company": "",      "street1": "123 Main St",      "street2": "",      "city": "Park City",      "state": "UT",      "zip": "84060",      "country": "US",      "phone": "5551231234",      "email": "johndoe@gmail.com"    },    "parcels": [      {        "length": 5,        "width": 5,        "height": 5,        "weight": 10      }    ],    "items": [      {        "title": "Milk",        "imageurl": "http://www.shippypro.com/milk.png",        "quantity": 5,        "price": 5.99,        "sku": "milk"      }    ],    "TransactionID": "ORDER2365",    "Date": 1492528071,    "Currency": "EUR",    "ItemsCount": 1,    "ContentDescription": "Milk",    "Total": 23.5,    "Status": "Paid",    "APIOrdersID": 30,    "ShipmentAmountPaid": 23.5,    "Incoterm": "DAP",    "BillAccountNumber": "",    "PaymentMethod": "PayPal",    "ShippingService": "Expedited",    "Note": "Ship by 25/06/2018"  }}'

  }, function (error, response, body) {
    console.log('Status:', response.statusCode)
    console.log('Headers:', JSON.stringify(response.headers))
    console.log('Response:', body)
  })
}

router.post('/create-order', async (req, res) => {
  const { _id, shippingInfo, totalPrice, paid, productsInCart } = req.body
  try {
    if (req.session.currentUser) {
      // User logged in
      const order = await Order.create({
        user: req.session.currentUser._id,
        shippingInfo,
        totalPrice,
        paid,
        productsInCart
      })
      await User.findByIdAndUpdate(
        { _id: req.session.currentUser._id },
        { $addToSet: { orders: order } }
      )
      res.status(200).json({ message: 'Order created', orderId: order._id })
    } else {
      // NO user logged in
      const order = await Order.create({
        shippingInfo,
        totalPrice,
        paid,
        productsInCart
      })
      res.status(200).json({ message: 'Order created', orderId: order._id })
    }
  } catch (err) {
    console.error(err)
  }
})

// When the order is paid
router.post('/update-order', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      { _id: req.body._id },
      { paid: true },
      { new: true }
    )
    sendEmail()
    // postOrderToShippyPro(order)
    res.status(200).json({ message: 'Order updated to paid' })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
