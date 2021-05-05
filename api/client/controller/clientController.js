const Client = require("../model/Client");

// creer un client
exports.createClient = (req, res, next) => {
    Client.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('client créé avec succès !')
        }
    })
};


// Recuperer un client
exports.client = (req, res) => {
    Client.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('client a été recuperé avec succès !')
        }
    })
};

// Modifier un client
exports.editClient = (req, res) => {
    Client.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('client a été modifié avec succès !')
        }
    })
};

// Mise a jour Client
exports.updateClient = (req, res) => {
    Client.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('client a été mis à jour avec succès !')
        }
    })
};


// Supprimer un client
exports.deleteClient = (req, res) => {
    Client.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
            console.log('client a été supprimer avec succès !')
        }
    })
};

