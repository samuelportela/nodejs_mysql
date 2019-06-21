var Product = require('../models/productsModel.js');

exports.getAll = function(req, res) {
    Product.getAll(function(err, product) {
        if (err) {
            res.send(err);
        }
        res.send(product);
    });
};

exports.getById = function(req, res) {
    Product.getById(req.params.id, function(err, product) {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

exports.updateById = function(req, res) {
    Product.updateById(req.params.id, new Product(req.body), function(err, product) {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};
