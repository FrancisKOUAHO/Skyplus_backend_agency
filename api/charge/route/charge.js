const express = require("express");
const router = express.Router();
const clientController = require("../controller/chargeController");

router.post("/create-checkout-session", clientController.createCharge);

module.exports = router;
