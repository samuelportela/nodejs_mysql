var sql = require('./db.js');

var Order = function(order) {
    this.user_id = order.user_id;
    this.product_id = order.product_id;
    this.quantity = order.quantity;
};

Order.add = function(id, newOrder, result) {
    sql.query("insert into orders set ?", newOrder, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};

Order.getById = function(id, result) {
    sql.query("select * from orders where id = ?", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        } else {
            result(null, res[0]);
        }
    });
};

Order.getAll = function(result) {
    sql.query("select * from orders", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Order.removeById = function(id, result) {
    sql.query("delete from orders where id = ?", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    }); 
};

module.exports = Order;
