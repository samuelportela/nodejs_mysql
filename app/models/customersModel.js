var sql = require('./db.js');

var Customer = function(customer) {
    this.full_name = customer.full_name;
    this.email = customer.email;
};

Customer.getById = function(id, result) {
    sql.query("select * from customers where id = ?", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        } else {
            result(null, res[0]);
        }
    });
};

Customer.getAll = function(result) {
    sql.query("select * from customers", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Customer.updateById = function(id, customer, result) {
    sql.query("update customers set full_name = ?, email = ? where id = ?", [customer.full_name, customer.email, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Customer;
