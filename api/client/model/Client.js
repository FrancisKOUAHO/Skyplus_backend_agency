const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientSchema = new Schema({
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
    },
    phone: {
        type: String,
    },
    project: {
        type: String,
    }
});

module.exports = mongoose.model("Client", clientSchema);
