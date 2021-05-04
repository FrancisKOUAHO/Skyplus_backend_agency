const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const clientSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    name_project: {
        type: String,
    },
    status: {
        type: String,
    },
    amount_paid: {
        type: Number,
    },
    address: {
        type: String,
    }
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
