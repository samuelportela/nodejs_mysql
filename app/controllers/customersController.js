var Customer = require('../models/customersModel.js');

exports.getAll = function(req, res) {
    Customer.getAll(function(err, customer) {
        if (err) {
            res.send(err);
        }
        res.send(customer);
    });
};

exports.getById = function(req, res) {
    Customer.getById(req.params.id, function(err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
};

exports.updateById = function(req, res) {
    Customer.updateById(req.params.id, new Customer(req.body), function(err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
};
