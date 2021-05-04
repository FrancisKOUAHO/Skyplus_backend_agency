const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.post("/create-client", clientController.createClient);
router.get("/get-client", clientController.client);

module.exports = router;


