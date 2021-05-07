const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chargeSchema = new Schema({
    title: {
        type: String,
    },
    description: [
        {
            type: String,
        },
    ],
    price: {
        type: Number,
    },
});

module.exports = mongoose.model("Charge", chargeSchema);
