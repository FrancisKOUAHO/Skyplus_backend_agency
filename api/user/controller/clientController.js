const Client = require("../model/Client");

exports.registerNewClient = async (req, res) => {
    try {
        const client = new Client({
            name: req.body.name,
            email: req.body.email,
            name_project: req.body.name_project,
            status: req.body.status,
            amount_paid: req.body.amount_paid,
            address: req.body.address
        });
        let data = await client.save();
    } catch (err) {
        res.status(400).json({ err: err });
    }
};

exports.getClientDetails = async (req, res) => {
    await res.json(req.clientData);
};
