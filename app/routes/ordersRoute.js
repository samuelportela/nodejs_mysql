module.exports = function(app) {
    var ordersController = require('../controllers/ordersController');

    app.route('/orders')
        .get(ordersController.getAll)
        .post(ordersController.add);

    app.route('/orders/:id')
        .get(ordersController.getById)
        .delete(ordersController.removeById);
};
