var sql = require('./db.js');

var Product = function(product) {
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
};

Product.getById = function(id, result) {
    sql.query("select * from products where id = ?", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        } else {
            result(null, res[0]);
        }
    });
};

Product.getAll = function(result) {
    sql.query("select * from products", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Product.updateById = function(id, product, result) {
    sql.query("update products set name = ?, price = ?, stock = ? where id = ?", [product.name, product.price, product.stock, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Product;
