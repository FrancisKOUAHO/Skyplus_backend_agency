const express = require("express");
const router = express.Router();
const clientController = require("../controller/chargeController");

router.post("/charge", clientController.createCharge);
router.get("/charge/:id", clientController.stripeCharges);


module.exports = router;
