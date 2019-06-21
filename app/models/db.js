var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'placeholder',
    user: 'placeholder',
    password: 'placeholder',
    database: 'placeholder'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
