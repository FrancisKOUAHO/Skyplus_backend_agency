const Client = require("../model/Client");

exports.createClient = (req, res, next) => {
    Client.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Client successfully created !')
        }
    })
};

exports.client =  (req, res) => {
    Client.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};
