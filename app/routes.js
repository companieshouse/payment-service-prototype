const express = require('express')
const router = express.Router()

// CHOOSE PAYMENT METHOD
router.get('/', function (req, res) {
  res.render('index')
})

// BASKET
router.get('/basket', function (req, res) {
  res.render('basket')
})

// CHOOSE PAYMENT METHOD
router.get('/choose-payment-method', function (req, res) {
  res.render('choose-payment-method')
})
router.post('/choose-payment-method', function (req, res) {
  req.session.paymentMethod = req.body.paymentMethod
  switch (req.session.paymentMethod) {
    case 'card':
      res.redirect('/govuk-pay/card-details')
      break
    case 'paypal':
      res.redirect('/govuk-pay/paypal')
      break
    case 'account':
      res.redirect('/companies-house-account')
      break
  }
})

// GOV.UK PAY CARD DETAILS
router.get('/govuk-pay/card-details', function (req, res) {
  res.render('govuk-pay/card-details')
})

// GOV.UK PAY REVIEW DETAILS
router.get('/govuk-pay/review-details', function (req, res) {
  res.render('govuk-pay/review-details')
})

// COMPANIES HOUSE ACCOUNT
router.get('/companies-house-account', function (req, res) {
  res.render('companies-house-account')
})

// CONFIRMATION SCREEN
router.get('/confirmation', function (req, res) {
  res.render('confirmation', {
    userEmail: 'john.smith@gmail.com'
  })
})

// CARD ERROR
router.get('/error/card-error', function (req, res) {
  res.render('error/card-error')
})

module.exports = router
