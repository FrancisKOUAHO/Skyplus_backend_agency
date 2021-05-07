const express = require('express');
const router = express.Router();
const paymentsController = require('../controller/paymentsController');

router.post(
  '/create-checkout-session',
  paymentsController.createCheckoutSession
);

module.exports = router;
