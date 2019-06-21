const express = require('express'),
app = express(),
bodyParser = require('body-parser');

port = process.env.PORT || 3000;
app.listen(port);
console.info('API server started on port: ' + port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// Loading of routes
var productsRoute = require('./app/routes/productsRoute');
productsRoute(app);

var customersRoute = require('./app/routes/customersRoute');
customersRoute(app);

var ordersRoute = require('./app/routes/ordersRoute');
ordersRoute(app);
