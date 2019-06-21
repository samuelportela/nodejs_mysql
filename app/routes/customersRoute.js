module.exports = function(app) {
    var customersController = require('../controllers/customersController');

    app.route('/customers')
        .get(customersController.getAll);

    app.route('/customers/:id')
        .get(customersController.getById)
        .put(customersController.updateById);
};
