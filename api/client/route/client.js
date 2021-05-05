const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.post("/create-client", clientController.createClient);
router.post("/update-client/:id", clientController.updateClient);

router.get("/get-client", clientController.client);
router.get("/edit-client/:id", clientController.editClient);

router.delete("/delete-client/:id", clientController.deleteClient);

module.exports = router;


