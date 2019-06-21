var Order = require('../models/ordersModel.js');

exports.getAll = function(req, res) {
    Order.getAll(function(err, order) {
        if (err) {
            res.send(err);
        }
        res.send(order);
    });
};

exports.getById = function(req, res) {
    Order.getById(req.params.id, function(err, order) {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
};

exports.add = function(req, res) {
    Order.add(req.params.id, new Order(req.body), function(err, order) {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
};

exports.removeById = function(req, res) {
    Order.removeById(req.params.id, function(err, order) {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
};
