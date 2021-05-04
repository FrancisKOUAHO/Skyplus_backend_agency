const mongoose = require("mongoose");
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

clientSchema.pre("save", async function(next) {
    next();
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
