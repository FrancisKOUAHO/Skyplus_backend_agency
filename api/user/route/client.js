const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.post("/register/client", clientController.registerNewClient);
router.get("/client", clientController.getClientDetails);

module.exports = router;


